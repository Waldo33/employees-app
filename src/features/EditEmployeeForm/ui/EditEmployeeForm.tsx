import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, TextField,
} from '@mui/material';
import { Employee, STRING_ROLES } from 'entities/Employee';
import { FC, useState } from 'react';

interface EditEmployeeFormProps {
    employee: Employee;
    isLoading?: boolean;
    error?: string;
}

export const EditEmployeeForm: FC<EditEmployeeFormProps> = (props) => {
    const { employee, isLoading, error } = props;
    const [readOnly, setReadOnly] = useState(true);

    const onEditClick = () => {
        setReadOnly(false);
    };

    const onCancelClick = () => {
        setReadOnly(true);
    };

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

    return (
        <Card elevation={5}>
            <CardContent>
                <Stack direction="column" gap={2} sx={{ mt: 2 }}>
                    <TextField
                        disabled={readOnly}
                        label="Имя"
                        value={employee.name}
                    />
                    <TextField
                        disabled={readOnly}
                        label="Телефон"
                        value={employee.phone}
                    />
                    <TextField
                        disabled={readOnly}
                        label="Дата рождения"
                        value={employee.birthday}
                    />
                    <FormControl>
                        <InputLabel id="sort-type">Должность</InputLabel>
                        <Select
                            disabled={readOnly}
                            labelId="sort-type"
                            value={employee.role}
                            label="Должность"
                        >
                            {
                                Object.entries(STRING_ROLES).map(([key, value]) => (
                                    <MenuItem
                                        key={key}
                                        value={key}
                                    >
                                        {value}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={(
                            <Checkbox
                                disabled={readOnly}
                                defaultChecked={employee.isArchive}
                            />
                        )}
                        label="В архиве"
                    />
                </Stack>
            </CardContent>
            <CardActions>
                <Box flexGrow={1} />
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
                                variant="contained"
                            >
                                Сохранить

                            </Button>
                        </>
                    )
                }
            </CardActions>
        </Card>
    );
};
