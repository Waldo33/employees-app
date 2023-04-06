import { Employee } from 'entities/Employee';

export interface EditEmployeeFormSchema {
    isLoading: boolean;
    error?: string;
    data?: Employee;
    formData?: Employee;
}
