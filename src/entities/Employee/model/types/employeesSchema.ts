import { Employee } from 'entities/Employee/model/types/employee';

export type SortKeys = Pick<Employee, 'name' | 'birthday'>
export type SortTypes = 'desc' | 'asc'

export interface EmployeesSchema {
    data?: Employee[];
    filteredData?: Employee[];
    isLoading: boolean;
    error?: string;
    sort: Record<keyof SortKeys, SortTypes>;
    searchQuery: string;
}
