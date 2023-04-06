import {
    Box, Checkbox,
    Dialog, DialogTitle, Divider,
    FormControl, FormControlLabel, IconButton, InputBase,
    InputLabel,
    MenuItem, Paper,
    Select,
    SelectChangeEvent,
    Stack,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    EmployeeCardList, EmployeeRole,
    employeesActions, getEmployees,
    getEmployeesIsLoading,
    getSort,
    SORT_TYPES,
    SortOrder,
    SortType, STRING_ROLES,
} from 'entities/Employee';
import { useSelector } from 'react-redux';
import { SORT_ORDERS } from 'shared/consts';
import { Tune } from '@mui/icons-material';
import { getFilters } from 'entities/Employee/model/selectors/getFilters/getFilters';

export const EmployeesPage = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch();
    const employees = useSelector(getEmployees.selectAll);
    const sort = useSelector(getSort);
    const filters = useSelector(getFilters);
    const isLoading = useSelector(getEmployeesIsLoading);

    const onOpenModal = () => {
        setShowModal(true);
    };
    const onCloseModal = () => {
        setShowModal(false);
    };

    const onChangeSortTypeHandler = (e: SelectChangeEvent) => {
        dispatch(employeesActions.setSortType(e.target.value as SortType));
    };

    const onChangeSortOrderHandler = (e: SelectChangeEvent) => {
        dispatch(employeesActions.setSortOrder(e.target.value as SortOrder));
    };

    const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(employeesActions.setSearchQuery(e.target.value));
    };

    const onFilterRoleHandler = (e: SelectChangeEvent) => {
        dispatch(employeesActions.setFilterRole(e.target.value as EmployeeRole));
    };
    const onFilterIsArchiveHandler = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch(employeesActions.setFilterIsArchive(checked));
    };

    return (
        <Box>
            <Dialog open={showModal} onClose={onCloseModal}>
                <DialogTitle>Настройки поиска</DialogTitle>
                <Box sx={{ px: 2, pb: 2 }}>
                    <Stack sx={{ mb: 2 }} gap={2} direction={{ xs: 'column', sm: 'row' }}>
                        <FormControl sx={{ minWidth: 120 }}>
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
                        <FormControl sx={{ minWidth: 120 }}>
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
                    <FormControl fullWidth sx={{ minWidth: 120 }}>
                        <InputLabel id="sort-type">Должность</InputLabel>
                        <Select
                            labelId="sort-type"
                            value={filters.role}
                            label="Должность"
                            onChange={onFilterRoleHandler}
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
                            <MenuItem value={undefined}>
                                Любая
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={(
                            <Checkbox
                                onChange={onFilterIsArchiveHandler}
                                defaultChecked={filters.isArchive}
                            />
                        )}
                        label="В архиве"
                    />
                </Box>
            </Dialog>
            <Stack sx={{ pb: 2 }} gap={1} direction="row">
                <Paper
                    elevation={5}
                    component="form"
                    sx={{
                        p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Поиск"
                        onChange={onSearchHandler}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton
                        onClick={onOpenModal}
                        color="primary"
                        sx={{ p: '10px' }}
                    >
                        <Tune />
                    </IconButton>
                </Paper>
            </Stack>
            <EmployeeCardList
                employees={employees}
                isLoading={isLoading}
            />
        </Box>
    );
};
