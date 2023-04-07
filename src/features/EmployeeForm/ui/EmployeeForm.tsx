import {
    Box,
    Card,
    CardActions,
    CardContent,
    Stack, TextField,
} from '@mui/material';
import {
    Employee, EmployeeArchiveCheckbox, EmployeeRole, EmployeeRoleSelect,
} from 'entities/Employee';
import {
    ChangeEvent, FC, useCallback,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MaskInput } from 'shared/ui/MaskInput/MaskInput';
import { employeeFormActions } from '../model/slice/employeeFormSlice';

interface EmployeeFormProps {
    employee?: Omit<Employee, 'id'>;
    readOnly?: boolean;
}

export const EmployeeForm: FC<EmployeeFormProps> = (props) => {
    const { employee, readOnly, children } = props;
    const dispatch = useAppDispatch();

    const onEditName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(employeeFormActions.setName(event.target.value));
    }, [dispatch]);

    const onEditPhone = useCallback((value: string) => {
        dispatch(employeeFormActions.setPhone(value));
    }, [dispatch]);

    const onEditBirthday = useCallback((value: string) => {
        dispatch(employeeFormActions.setBirthday(value));
    }, [dispatch]);

    const onChangeRole = useCallback((value: EmployeeRole) => {
        dispatch(employeeFormActions.setRole(value));
    }, [dispatch]);

    const onChangeIsArchive = useCallback((checked: boolean) => {
        dispatch(employeeFormActions.setIsArchive(checked));
    }, [dispatch]);

    return (
        <Card elevation={5}>
            <CardContent>
                <Stack direction="column" gap={2} sx={{ mt: 2 }}>
                    <TextField
                        disabled={readOnly}
                        label="Имя"
                        value={employee?.name}
                        onChange={onEditName}
                    />
                    <MaskInput
                        mask="+7 (999) 999-9999"
                        value={employee?.phone}
                        onChange={onEditPhone}
                        disabled={readOnly}
                        label="Телефон"
                    />
                    <MaskInput
                        mask="99.99.9999"
                        disabled={readOnly}
                        label="Дата рождения"
                        value={employee?.birthday}
                        onChange={onEditBirthday}
                    />
                    <EmployeeRoleSelect
                        value={employee?.role}
                        disabled={readOnly}
                        onChange={onChangeRole}
                    />
                    <EmployeeArchiveCheckbox
                        value={employee?.isArchive}
                        disabled={readOnly}
                        onChange={onChangeIsArchive}
                    />
                </Stack>
            </CardContent>
            <CardActions>
                <Box flexGrow={1} />
                {children}
            </CardActions>
        </Card>
    );
};
