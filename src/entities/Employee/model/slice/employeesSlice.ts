import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from 'entities/Employee/model/services/fetchEmployees/fetchEmployees';
import { Employee, EmployeeRole } from 'entities/Employee/model/types/employee';
import { EmployeesSchema, SortOrder, SortType } from '../types/employeesSchema';

const initialState: EmployeesSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    sort: {
        type: 'name',
        order: 'desc',
    },
    filters: {
        role: undefined,
        isArchive: false,
    },
    searchQuery: '',
};

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setSortType: (state, action: PayloadAction<SortType>) => {
            state.sort.type = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<SortOrder>) => {
            state.sort.order = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setFilterRole: (state, action: PayloadAction<EmployeeRole>) => {
            state.filters.role = action.payload;
        },
        setFilterIsArchive: (state, action: PayloadAction<boolean>) => {
            state.filters.isArchive = action.payload;
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
