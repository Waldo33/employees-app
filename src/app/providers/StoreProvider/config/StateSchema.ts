import { AxiosInstance } from 'axios';
import { EmployeesSchema } from 'entities/Employee';
import { EmployeeFormSchema } from 'features/EmployeeForm';

export interface StateSchema {
    employees: EmployeesSchema;
    employeeForm: EmployeeFormSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
