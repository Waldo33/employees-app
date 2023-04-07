import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Employee, EmployeeRole } from 'entities/Employee';
import { fetchEmployeeById } from 'entities/Employee/model/services/fetchEmployeeById/fetchEmployeeById';
import { EmployeeFormSchema } from '../types/employeeFormSchema';

const initialState: EmployeeFormSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    formData: {
        birthday: '',
        isArchive: false,
        name: '',
        phone: '',
        role: 'cook',
    },
};

export const employeeFormSlice = createSlice({
    name: 'employeeForm',
    initialState,
    reducers: {
        resetToDefault: (state) => {
            if (state.data) {
                const {
                    birthday, isArchive, name, phone, role,
                } = state.data;
                state.formData = {
                    birthday, isArchive, name, phone, role,
                };
            }
        },
        resetForm: (state) => {
            state.formData = {
                birthday: '', isArchive: false, name: '', phone: '', role: 'cook',
            };
        },
        setName: (state, action: PayloadAction<string>) => {
            if (state.formData) {
                state.formData.name = action.payload;
            }
        },
        setPhone: (state, action: PayloadAction<string>) => {
            if (state.formData) {
                state.formData.phone = action.payload;
            }
        },
        setBirthday: (state, action: PayloadAction<string>) => {
            if (state.formData) {
                state.formData.birthday = action.payload;
            }
        },
        setRole: (state, action: PayloadAction<EmployeeRole>) => {
            if (state.formData) {
                state.formData.role = action.payload;
            }
        },
        setIsArchive: (state, action: PayloadAction<boolean>) => {
            if (state.formData) {
                state.formData.isArchive = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeeById.fulfilled, (state, action: PayloadAction<Employee>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchEmployeeById.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const {
    actions: employeeFormActions,
    reducer: employeeFormReducer,
} = employeeFormSlice;
