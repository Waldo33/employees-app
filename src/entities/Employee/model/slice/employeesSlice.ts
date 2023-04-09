import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from 'entities/Employee/model/services/fetchEmployees/fetchEmployees';
import { Employee, EmployeeRole } from 'entities/Employee/model/types/employee';
import { StateSchema } from 'app/providers/StoreProvider';
import { addEmployee } from '../services/addEmployee/addEmployee';
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
    ids: [],
    entities: {},
};

const employeesAdapter = createEntityAdapter<Employee>({
    selectId: (employee) => employee.id,
});

export const getEmployees = employeesAdapter.getSelectors<StateSchema>(
    (state) => state.employees || employeesAdapter.getInitialState(),
);

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: employeesAdapter.getInitialState<EmployeesSchema>(initialState),
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
        resetFilters: (state) => {
            state.filters.role = undefined;
            state.filters.isArchive = false;
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
                employeesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addEmployee.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addEmployee.fulfilled, (state, action: PayloadAction<Employee>) => {
                state.isLoading = false;
                employeesAdapter.addOne(state, action.payload);
            })
            .addCase(addEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: employeesActions,
    reducer: employeesReducer,
} = employeesSlice;
