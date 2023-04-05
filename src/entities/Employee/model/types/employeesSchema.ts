import { Employee, EmployeeRole } from 'entities/Employee/model/types/employee';

export type SortType = keyof Pick<Employee, 'name' | 'birthday'>
export type SortOrder = 'desc' | 'asc'

export interface EmployeesSchema {
    data?: Employee[];
    isLoading: boolean;
    error?: string;
    sort: {
        type: SortType;
        order: SortOrder;
    };
    filters: {
        role?: EmployeeRole;
        isArchive: boolean;
    }
    searchQuery: string;
}
