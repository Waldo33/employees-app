import {
    Divider, IconButton, InputBase, Paper, debounce,
} from '@mui/material';
import {
    ChangeEvent, FC, ReactNode, useCallback, useMemo,
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

    const searchDelayed = useMemo(() => debounce(onSearchHandler, 400), [onSearchHandler]);

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
                onChange={searchDelayed}
                inputProps={{
                    'data-testid': 'Search',
                }}
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
