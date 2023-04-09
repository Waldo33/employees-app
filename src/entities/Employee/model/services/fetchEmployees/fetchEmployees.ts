import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getFilters } from 'entities/Employee/model/selectors/getFilters/getFilters';
import { getSort } from '../../selectors/getSort/getSort';
import { Employee } from '../../types/employee';
import { getSearchQuery } from '../../selectors/getSearchQuery/getSearchQuery';

type RequestParams = Partial<Employee> & {
    _sort: string;
    _order: string;
    name_like?: string;
}

export const fetchEmployees = createAsyncThunk<Employee[], void, ThunkConfig<string>>(
    'employees/fetchEmployees',
    async (_, { extra, rejectWithValue, getState }) => {
        const sort = getSort(getState());
        const searchQuery = getSearchQuery(getState());
        const { role, isArchive } = getFilters(getState());

        const params: RequestParams = {
            _sort: sort.type,
            _order: sort.order,
            name_like: searchQuery,
        };

        if (role) {
            params.role = role;
        }

        if (!isArchive) {
            params.isArchive = isArchive;
        }

        try {
            const response = await extra.api.get<Employee[]>(
                '/employees',
                {
                    params,
                },
            );

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
