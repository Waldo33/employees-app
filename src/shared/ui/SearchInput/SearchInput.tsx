import {
    Divider, IconButton, InputBase, Paper,
} from '@mui/material';
import {
    ChangeEvent, FC, ReactNode, useCallback,
} from 'react';

interface SearchInputProps {
    onSearch: (value: string) => void;
    disabled?: boolean;
}

const SearchInput: FC<SearchInputProps> = (props) => {
    const { onSearch, disabled, children } = props;

    const onSearchHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    }, [onSearch]);

    return (
        <Paper
            elevation={5}
            component="form"
            sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',
            }}
        >
            <InputBase
                disabled={disabled}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Поиск"
                onChange={onSearchHandler}
            />
            {
                children && (
                    <>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        {children}
                    </>
                )
            }
        </Paper>
    );
};

export default SearchInput;
