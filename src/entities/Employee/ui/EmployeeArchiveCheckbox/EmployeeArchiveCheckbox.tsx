import { Checkbox, FormControlLabel } from '@mui/material';
import { ChangeEvent, FC } from 'react';

interface EmployeeArchiveCheckboxProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

export const EmployeeArchiveCheckbox: FC<EmployeeArchiveCheckboxProps> = (props) => {
    const { value, onChange, disabled } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        onChange?.(checked);
    };

    return (
        <FormControlLabel
            control={(
                <Checkbox
                    disabled={disabled}
                    onChange={onChangeHandler}
                    checked={value}
                />
            )}
            label="В архиве"
        />
    );
};
