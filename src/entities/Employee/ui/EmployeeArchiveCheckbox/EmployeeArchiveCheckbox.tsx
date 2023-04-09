import { Checkbox, FormControlLabel, InputBaseComponentProps } from '@mui/material';
import { ChangeEvent, FC } from 'react';

interface EmployeeArchiveCheckboxProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    inputProps?: InputBaseComponentProps;
}

export const EmployeeArchiveCheckbox: FC<EmployeeArchiveCheckboxProps> = (props) => {
    const {
        value, onChange, disabled, inputProps,
    } = props;

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
                    inputProps={inputProps}
                    data-testid="archiveFlag"
                />
            )}
            label="В архиве"
        />
    );
};
