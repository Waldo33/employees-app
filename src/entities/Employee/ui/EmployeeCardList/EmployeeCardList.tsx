import { FC } from 'react';
import { Employee } from 'entities/Employee/model/types/employee';
import {
    Alert, AlertTitle, Box, Card, CardContent, Skeleton, Stack, Typography,
} from '@mui/material';
import { EmployeeCard } from 'entities/Employee/ui/EmployeeCard/EmployeeCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSearchQuery } from '../../model/selectors/getSearchQuery/getSearchQuery';

interface EmployeeCardListProps {
    employees?: Employee[];
    isLoading?: boolean;
}
export const EmployeeCardList: FC<EmployeeCardListProps> = (props) => {
    const { employees, isLoading } = props;
    const searchQuery = useSelector(getSearchQuery);
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <Box>
                <Stack spacing={2}>
                    {
                        Array(5).fill(0).map(() => (
                            <Card
                                elevation={5}
                            >
                                <CardContent>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                </CardContent>
                            </Card>
                        ))
                    }
                </Stack>
            </Box>
        );
    }

    if (!employees?.length) {
        return (
            <Box>
                <Alert severity="info">
                    Не найдено сотрудников по запросу
                    {' '}
                    <strong>{searchQuery}</strong>
                </Alert>
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
