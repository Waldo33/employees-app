import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Employee } from 'entities/Employee/model/types/employee';
import { Box, Stack, Typography } from '@mui/material';
import { EmployeeCard } from 'entities/Employee/ui/EmployeeCard/EmployeeCard';
import { useNavigate } from 'react-router-dom';
import cls from './EmployeeCardList.module.scss';

interface EmployeeCardListProps {
    employees?: Employee[];
    isLoading?: boolean;
}
export const EmployeeCardList: FC<EmployeeCardListProps> = (props) => {
    const { employees, isLoading } = props;
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <Box>
                <Typography>Загрузка...</Typography>
            </Box>
        );
    }

    if (!employees?.length) {
        return (
            <Box>
                <Typography>Список сотрудников пуст</Typography>
            </Box>
        );
    }

    return (
        <Box>
            <Stack spacing={2}>
                {
                    employees.map((employee) => (
                        <EmployeeCard
                            onClick={() => navigate(`/employees/${employee.id}`)}
                            key={employee.id}
                            employee={employee}
                        />
                    ))
                }
            </Stack>
        </Box>
    );
};
