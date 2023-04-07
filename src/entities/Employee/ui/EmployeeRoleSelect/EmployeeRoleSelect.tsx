import {
    FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';
import { EmployeeRole } from '../../model/types/employee';
import { STRING_ROLES } from '../../consts';

interface EmployeeRoleSelectProps {
    value?: EmployeeRole;
    onChange?: (value: EmployeeRole) => void;
    disabled?: boolean;
}

export const EmployeeRoleSelect: FC<EmployeeRoleSelectProps> = (props) => {
    const { value, onChange, disabled } = props;

    const onChangeHandler = (event: SelectChangeEvent) => {
        const role = event.target.value as EmployeeRole;
        onChange?.(role);
    };

    return (
        <FormControl fullWidth sx={{ minWidth: 120 }}>
            <InputLabel id="sort-type">Должность</InputLabel>
            <Select
                disabled={disabled}
                labelId="sort-type"
                value={value}
                label="Должность"
                onChange={onChangeHandler}
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
    );
};
