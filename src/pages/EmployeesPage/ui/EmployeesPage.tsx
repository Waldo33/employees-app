import {
    AppBar, Box, Button, ButtonGroup, Container, CssBaseline, Stack, TextField, Toolbar, Typography,
} from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    EmployeeCardList, employeesActions, fetchEmployees, getFilteredEmployees,
} from 'entities/Employee';
import { useSelector } from 'react-redux';

export const EmployeesPage = () => {
    const dispatch = useAppDispatch();
    const employees = useSelector(getFilteredEmployees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const onToggleSortByName = () => {
        dispatch(employeesActions.toggleSortByName());
    };

    const onToggleSortByBirthday = () => {
        dispatch(employeesActions.toggleSortByBirthday());
    };

    const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(employeesActions.setSearchQuery(e.target.value));
    };

    return (
        <div>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Employees App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    <Stack sx={{ pb: 2 }} gap={2}>
                        <ButtonGroup variant="outlined">
                            <Button onClick={onToggleSortByName}>Сортировка по имени</Button>
                            <Button onClick={onToggleSortByBirthday}>Сортировка по дате рождения</Button>
                        </ButtonGroup>
                        <TextField label="Поиск по имени" onChange={onSearchHandler} />
                    </Stack>
                    <EmployeeCardList
                        employees={employees}
                    />
                </Box>
            </Container>
        </div>
    );
};
