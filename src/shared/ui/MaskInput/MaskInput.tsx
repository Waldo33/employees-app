import { InputBaseComponentProps, InputProps, TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import ReactInputMask from 'react-input-mask';

interface MaskInputProps {
    mask: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    label?: string;
    inputProps?: InputBaseComponentProps;
}

export const MaskInput: FC<MaskInputProps> = (props) => {
    const {
        mask, value, onChange, disabled, label, inputProps,
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        (
            <ReactInputMask
                data-testid="mask"
                mask={mask}
                value={value}
                onChange={onChangeHandler}
                disabled={disabled}
            >
                <TextField
                    label={label}
                    inputProps={inputProps}
                />
            </ReactInputMask>
        )
    );
};
