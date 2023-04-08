import { Home } from '@mui/icons-material';
import {
    Alert, AlertTitle, Box, Button, Card, CardActions, CardContent, IconButton, Skeleton, Stack,
} from '@mui/material';
import { editEmployeeById } from 'entities/Employee/model/services/editEmployeeById/editEmployeeById';
import { fetchEmployeeById } from 'entities/Employee/model/services/fetchEmployeeById/fetchEmployeeById';
import {
    EmployeeForm, getEmployeeFormData, getEmployeeFormError, getEmployeeFormIsLoading,
} from 'features/EmployeeForm';
import { employeeFormActions } from 'features/EmployeeForm/model/slice/employeeFormSlice';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const EmployeeEditPage = () => {
    const { id } = useParams();
    const employee = useSelector(getEmployeeFormData);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEmployeeFormIsLoading);
    const error = useSelector(getEmployeeFormError);
    const [readOnly, setReadOnly] = useState(true);
    const navigate = useNavigate();

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
            <Box>
                <Alert
                    severity="error"
                    action={(
                        <IconButton
                            onClick={() => navigate('/')}
                            color="inherit"
                        >
                            <Home />
                        </IconButton>
                    )}
                >
                    <AlertTitle>Сотрудник не найден</AlertTitle>
                    Не удалось найти сотрудника с id
                    {' '}
                    <strong>{id}</strong>
                </Alert>
            </Box>
        );
    }

    if (isLoading) {
        return (
            <Card
                elevation={5}
            >
                <CardContent>
                    <Stack sx={{ pt: 2 }} gap={2}>
                        <Skeleton variant="rounded" height={50} />
                        <Skeleton variant="rounded" height={50} />
                        <Skeleton variant="rounded" height={50} />
                        <Skeleton variant="rounded" height={50} />
                        <Skeleton variant="text" width="50%" />
                    </Stack>
                </CardContent>
                <CardActions>
                    <Box flexGrow={1} />
                    <Skeleton variant="rounded" width={75} height={25} />
                </CardActions>
            </Card>
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
