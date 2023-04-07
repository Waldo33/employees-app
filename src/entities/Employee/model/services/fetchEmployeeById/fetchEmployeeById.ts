import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Employee } from '../../types/employee';

export const fetchEmployeeById = createAsyncThunk<Employee, number, ThunkConfig<string>>(
    'employees/fetchEmployeeById',
    async (employeeId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Employee>(`/employees/${employeeId}`);

            if (!response.data) {
                return rejectWithValue('no data');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
