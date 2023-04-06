import {
    Card, CardActionArea, CardContent, Typography,
} from '@mui/material';
import { FC } from 'react';
import { formatRole } from 'entities/Employee/lib/formatRole/formatRole';
import { classNames } from 'shared/lib/classNames/classNames';
import { Employee } from '../../model/types/employee';
import cls from './EmployeeCard.module.scss';

interface EmployeeCardProps {
    employee: Employee;
    onClick?: () => void;
}

export const EmployeeCard: FC<EmployeeCardProps> = (props) => {
    const { employee, onClick } = props;
    return (
        <Card
            onClick={onClick}
            className={classNames(cls.EmployeeCard, { [cls.isArchive]: employee.isArchive })}
            elevation={5}
        >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {employee.name}
                    </Typography>
                    <Typography>
                        {`Должность: ${formatRole(employee.role)}`}
                    </Typography>
                    <Typography>
                        {`Номер телефона: ${employee.phone}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
