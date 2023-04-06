import { createSlice } from '@reduxjs/toolkit';
import { EditEmployeeFormSchema } from '../types/editEmployeeFormSchema';

const initialState: EditEmployeeFormSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    formData: undefined,
};

export const editEmployeeFormSlice = createSlice({
    name: 'editEmployeeForm',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {},
});

export const {
    actions: editEmployeeFormActions,
    reducer: editEmployeeFormReducer,
} = editEmployeeFormSlice;
