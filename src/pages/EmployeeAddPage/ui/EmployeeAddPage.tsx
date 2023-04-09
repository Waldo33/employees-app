import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { addEmployee } from 'entities/Employee';
import { EmployeeForm, getEmployeeFormData, getEmployeeFormError } from 'features/EmployeeForm';
import { employeeFormActions } from 'features/EmployeeForm/model/slice/employeeFormSlice';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const EmployeeAddPage = () => {
    const formData = useSelector(getEmployeeFormData);
    const error = useSelector(getEmployeeFormError);
    const dispatch = useAppDispatch();

    const onClickCreate = useCallback(() => {
        dispatch(addEmployee(formData));
        if (!error) {
            dispatch(employeeFormActions.resetForm());
        }
    }, [dispatch, formData, error]);

    return (
        <Box>
            <EmployeeForm
                data-testid="employee-form"
                employee={formData}
            >
                <Button
                    data-testid="createBtn"
                    onClick={onClickCreate}
                    startIcon={<Add />}
                    variant="contained"
                >
                    Создать

                </Button>
            </EmployeeForm>
        </Box>
    );
};
