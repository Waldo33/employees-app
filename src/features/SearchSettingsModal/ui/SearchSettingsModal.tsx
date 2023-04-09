import {
    Box, Button, Dialog, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack,
} from '@mui/material';
import {
    EmployeeArchiveCheckbox,
    EmployeeRole,
    EmployeeRoleSelect,
    SORT_TYPES,
    SortOrder, SortType, employeesActions, getSort,
} from 'entities/Employee';
import { getFilters } from 'entities/Employee/model/selectors/getFilters/getFilters';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SORT_ORDERS } from 'shared/consts';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface SearchSettingsModalProps {
    open: boolean;
    onClose: () => void;
}

export const SearchSettingsModal: FC<SearchSettingsModalProps> = (props) => {
    const { open, onClose } = props;
    const dispatch = useAppDispatch();
    const sort = useSelector(getSort);
    const filters = useSelector(getFilters);

    const onChangeSortTypeHandler = useCallback((e: SelectChangeEvent) => {
        dispatch(employeesActions.setSortType(e.target.value as SortType));
    }, [dispatch]);

    const onChangeSortOrderHandler = useCallback((e: SelectChangeEvent) => {
        dispatch(employeesActions.setSortOrder(e.target.value as SortOrder));
    }, [dispatch]);

    const onFilterRoleHandler = useCallback((value: EmployeeRole) => {
        dispatch(employeesActions.setFilterRole(value));
    }, [dispatch]);
    const onFilterIsArchiveHandler = (checked: boolean) => {
        dispatch(employeesActions.setFilterIsArchive(checked));
    };

    const onResetFilters = useCallback(() => {
        dispatch(employeesActions.resetFilters());
    }, [dispatch]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Настройки поиска</DialogTitle>
            <Box sx={{ px: 2, pb: 2 }}>
                <Stack sx={{ mb: 2 }} gap={2} direction={{ xs: 'column', sm: 'row' }}>
                    <FormControl
                        sx={{ minWidth: 120 }}
                        data-testid="sortType"
                    >
                        <InputLabel id="sort-type">Сортировать</InputLabel>
                        <Select
                            labelId="sort-type"
                            value={sort.type}
                            label="Сортировать"
                            onChange={onChangeSortTypeHandler}
                        >
                            {
                                Object.entries(SORT_TYPES).map(([key, value]) => (
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
                    <FormControl
                        sx={{ minWidth: 120 }}
                        data-testid="sortOrder"
                    >
                        <InputLabel id="sort-order">Порядок</InputLabel>
                        <Select
                            labelId="sort-order"
                            value={sort.order}
                            label="Порядок"
                            onChange={onChangeSortOrderHandler}
                        >
                            {
                                Object.entries(SORT_ORDERS).map(([key, value]) => (
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
                </Stack>
                <EmployeeRoleSelect
                    value={filters.role}
                    onChange={onFilterRoleHandler}
                />
                <EmployeeArchiveCheckbox
                    value={filters.isArchive}
                    onChange={onFilterIsArchiveHandler}
                />
                <Box>
                    <Button
                        fullWidth
                        onClick={onResetFilters}
                        color="error"
                        variant="outlined"
                    >
                        Сбросить фильтры
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};
