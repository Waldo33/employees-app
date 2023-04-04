import { AxiosInstance } from 'axios';
import { EmployeesSchema } from 'entities/Employee/model/types/employeesSchema';

export interface StateSchema {
    employees: EmployeesSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
