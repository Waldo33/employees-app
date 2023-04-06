import { AxiosInstance } from 'axios';
import { EmployeesSchema } from 'entities/Employee';
import { EditEmployeeFormSchema } from 'features/EditEmployeeForm';

export interface StateSchema {
    employees: EmployeesSchema;
    editEmployeeForm: EditEmployeeFormSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
