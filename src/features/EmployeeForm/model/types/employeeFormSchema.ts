import { Employee } from 'entities/Employee';

export interface EmployeeFormSchema {
    isLoading: boolean;
    error?: string;
    data?: Employee;
    formData: Omit<Employee, 'id'>;
}
