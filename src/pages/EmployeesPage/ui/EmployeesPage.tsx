import {
    Box, IconButton,
} from '@mui/material';
import {
    useCallback, useState,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    EmployeeCardList,
    employeesActions, getEmployees,
    getEmployeesIsLoading,
} from 'entities/Employee';
import { useSelector } from 'react-redux';
import { Tune } from '@mui/icons-material';
import { SearchSettingsModal } from 'features/SearchSettingsModal';
import SearchInput from 'shared/ui/SearchInput/SearchInput';

export const EmployeesPage = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch();
    const employees = useSelector(getEmployees.selectAll);
    const isLoading = useSelector(getEmployeesIsLoading);

    const onOpenModal = () => {
        setShowModal(true);
    };
    const onCloseModal = () => {
        setShowModal(false);
    };

    const onSearch = useCallback((value: string) => {
        dispatch(employeesActions.setSearchQuery(value));
    }, [dispatch]);

    return (
        <Box>
            <Box sx={{ mb: 2, mt: 1 }}>
                <SearchInput
                    onSearch={onSearch}
                >
                    <IconButton
                        disabled={isLoading}
                        onClick={onOpenModal}
                        color="primary"
                        sx={{ p: '10px' }}
                    >
                        <Tune />
                    </IconButton>
                    <SearchSettingsModal
                        open={showModal}
                        onClose={onCloseModal}
                    />
                </SearchInput>
            </Box>
            <EmployeeCardList
                employees={employees}
                isLoading={isLoading}
            />
        </Box>
    );
};
