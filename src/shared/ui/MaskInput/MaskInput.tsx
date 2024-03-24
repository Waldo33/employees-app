import { InputBaseComponentProps, InputProps, TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import ReactInputMask from 'react-input-mask';

/**
 * Пропсы компонента {@link MaskInput}
 * @category shared
 * @see MaskInput
 */
interface MaskInputProps {
    /**
     * Текстовая маска
     */
    mask: string;
    /**
     * Значение текстового поля
     */
    value?: string;
    /**
     * Функция-обработчик события изменения текста
     * @type {function(value:string):void}
     */
    onChange?: (value: string) => void;
    /**
     * Заблокировать текстовое поле от ввода
     */
    disabled?: boolean;
    /**
     * Подпись текстового поля
     */
    label?: string;
    /**
     * Пропсы для TextField
     * @type {InputBaseComponentProps}
     */
    inputProps?: InputBaseComponentProps;
}

/**
 * Компонент TextField с ограничением ввода по текстовой маске
 * @category shared
 * @param {MaskInputProps} props
 * @component
 * @example <caption>Example usage of MaskInput.</caption>
 * return (
 *  <MaskInput
 *      mask="99.99.9999"
 *      disabled={readOnly}
 *      label={label}
 *      value={value}
 *      onChange={onEditBirthday}
 *      inputProps={{
 *          'data-testid': 'birthdayInput',
 *      }}
 *  />
 * )
 */
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
