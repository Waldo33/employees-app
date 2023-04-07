import { TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import ReactInputMask from 'react-input-mask';

interface MaskInputProps {
    mask: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    label?: string;
}

export const MaskInput: FC<MaskInputProps> = (props) => {
    const {
        mask, value, onChange, disabled, label,
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        (
            <ReactInputMask
                mask={mask}
                value={value}
                onChange={onChangeHandler}
                disabled={disabled}
            >
                <TextField label={label} />
            </ReactInputMask>
        )
    );
};
