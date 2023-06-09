import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Employee } from '../../types/employee';
import { fetchEmployees } from '../fetchEmployees/fetchEmployees';

export const editEmployeeById = createAsyncThunk<Employee, Employee, ThunkConfig<string>>(
    'employees/editEmployeeById',
    async (employee, { extra, rejectWithValue, dispatch }) => {
        const { birthday, name, phone } = employee;

        if (!birthday || !name || !phone) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.patch<Employee>(`/employees/${employee.id}`, employee);

            if (!response.data) {
                return rejectWithValue('error');
            }

            dispatch(fetchEmployees());

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
