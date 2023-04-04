import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from 'entities/Employee/model/services/fetchEmployees/fetchEmployees';
import { Employee } from 'entities/Employee/model/types/employee';
import { formatStringToDate } from 'shared/lib/formatStringToDate/formatStringToDate';
import { EmployeesSchema } from '../types/employeesSchema';

const initialState: EmployeesSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    filteredData: undefined,
    sort: {
        name: 'desc',
        birthday: 'desc',
    },
    searchQuery: '',
};

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        toggleSortByName: (state) => {
            state.sort.name = state.sort.name === 'desc' ? 'asc' : 'desc';
        },
        toggleSortByBirthday: (state) => {
            state.sort.birthday = state.sort.birthday === 'desc' ? 'asc' : 'desc';
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.filteredData = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: employeesActions,
    reducer: employeesReducer,
} = employeesSlice;
