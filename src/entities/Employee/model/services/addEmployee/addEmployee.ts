import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Employee } from '../../types/employee';

export const addEmployee = createAsyncThunk<Employee, Omit<Employee, 'id'>, ThunkConfig<string>>(
    'employees/addEmployee',
    async (employee, { extra, rejectWithValue }) => {
        const { birthday, name, phone } = employee;

        if (!birthday || !name || !phone) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Employee>('/employees', employee);

            if (!response.data) {
                return rejectWithValue('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
