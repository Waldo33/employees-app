import { Box, Button } from '@mui/material';
import { getEmployeeById } from 'entities/Employee';
import { EditEmployeeForm } from 'features/EditEmployeeForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const EmployeeEditPage = () => {
    const { id } = useParams();
    const employee = useSelector(getEmployeeById(Number(id)));

    if (!employee) {
        return (
            <div>Сотрудник не найден</div>
        );
    }

    return (
        <Box>
            <EditEmployeeForm
                employee={employee}
            />
        </Box>
    );
};
