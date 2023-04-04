import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Employee } from 'entities/Employee/model/types/employee';
import { Box, Stack } from '@mui/material';
import { EmployeeCard } from 'entities/Employee/ui/EmployeeCard/EmployeeCard';
import cls from './EmployeeCardList.module.scss';

interface EmployeeCardListProps {
    employees?: Employee[];
    isLoading?: boolean;
}
export const EmployeeCardList: FC<EmployeeCardListProps> = (props) => {
    const { employees, isLoading } = props;

    return (
        <Box>
            <Stack spacing={2}>
                {
                    employees?.length
                        ? employees?.map((employee) => (
                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                            />
                        ))
                        : 'Нет сотрудников'
                }
            </Stack>
        </Box>
    );
};
