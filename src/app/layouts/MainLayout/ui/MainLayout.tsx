import { Add, Home } from '@mui/icons-material';
import {
    AppBar, Box, Container, CssBaseline, IconButton, Toolbar, Typography,
} from '@mui/material';
import { fetchEmployees, getSearchQuery, getSort } from 'entities/Employee';
import { getFilters } from 'entities/Employee/model/selectors/getFilters/getFilters';
import { employeeFormActions } from 'features/EmployeeForm/model/slice/employeeFormSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const MainLayout = () => {
    const dispatch = useAppDispatch();
    const sort = useSelector(getSort);
    const filters = useSelector(getFilters);
    const query = useSelector(getSearchQuery);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch, sort, filters, query]);

    const onClickAdd = () => {
        dispatch(employeeFormActions.resetForm());
        navigate('/employees/add');
    };

    return (
        <div>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <IconButton
                        onClick={() => navigate('/')}
                        color="inherit"
                    >
                        <Home />
                    </IconButton>
                    <Box flexGrow={1} />
                    <IconButton
                        onClick={onClickAdd}
                        color="inherit"
                    >
                        <Add />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container>
                <Box component="main" sx={{ p: 1 }}>
                    <Toolbar />
                    <Outlet />
                </Box>
            </Container>
        </div>
    );
};
