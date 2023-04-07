import { Box, Button } from '@mui/material';
import { editEmployeeById } from 'entities/Employee/model/services/editEmployeeById/editEmployeeById';
import { fetchEmployeeById } from 'entities/Employee/model/services/fetchEmployeeById/fetchEmployeeById';
import {
    EmployeeForm, getEmployeeFormData, getEmployeeFormError, getEmployeeFormIsLoading,
} from 'features/EmployeeForm';
import { employeeFormActions } from 'features/EmployeeForm/model/slice/employeeFormSlice';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const EmployeeEditPage = () => {
    const { id } = useParams();
    const employee = useSelector(getEmployeeFormData);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEmployeeFormIsLoading);
    const error = useSelector(getEmployeeFormError);
    const [readOnly, setReadOnly] = useState(true);

    const onSaveClick = useCallback(() => {
        if (employee && id) {
            dispatch(editEmployeeById({ id: Number(id), ...employee }));
            setReadOnly(true);
        }
    }, [dispatch, employee, id]);

    const onEditClick = useCallback(() => {
        setReadOnly(false);
    }, []);

    const onCancelClick = useCallback(() => {
        setReadOnly(true);
        dispatch(employeeFormActions.resetToDefault());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchEmployeeById(Number(id)));
    }, [dispatch, id]);

    if (error) {
        return (
            <div>Error</div>
        );
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    if (!employee) {
        return (
            <div>Сотрудник не найден</div>
        );
    }

    return (
        <Box>
            <EmployeeForm
                employee={employee}
                readOnly={readOnly}
            >
                {
                    readOnly ? (
                        <Button
                            onClick={onEditClick}
                            variant="contained"
                        >
                            Редактировать

                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={onCancelClick}
                                color="error"
                                variant="contained"
                            >
                                Отменить

                            </Button>
                            <Button
                                onClick={onSaveClick}
                                variant="contained"
                            >
                                Сохранить

                            </Button>
                        </>
                    )
                }
            </EmployeeForm>
        </Box>
    );
};
