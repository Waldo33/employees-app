import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getSort } from '../../selectors/getSort/getSort';
import { Employee } from '../../types/employee';
import { getSearchQuery } from '../../selectors/getSearchQuery/getSearchQuery';

type RequestParams = {
    _sort: string;
    _order: string;
    name_like?: string;
}

export const fetchEmployees = createAsyncThunk<Employee[], void, ThunkConfig<string>>(
    'employees/fetchEmployees',
    async (_, { extra, rejectWithValue, getState }) => {
        const sort = getSort(getState());
        const searchQuery = getSearchQuery(getState());

        const params: RequestParams = {
            _sort: Object.keys(sort).join(','),
            _order: Object.values(sort).join(','),
            name_like: searchQuery,

        };

        try {
            const response = await extra.api.get<Employee[]>(
                '/employees',
                {
                    params,
                },
            );

            if (!response.data) {
                throw new Error('no data');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
