import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Employee } from '../../types/employee';

export const editEmployeeById = createAsyncThunk<Employee, Employee, ThunkConfig<string>>(
    'employees/editEmployeeById',
    async (employee, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<Employee>(`/employees/${employee.id}`, employee);

            if (!response.data) {
                throw new Error('no data');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
