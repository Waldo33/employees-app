export type EmployeeRole = 'driver' | 'waiter' | 'cook';

export interface Employee {
    id: number;
    name: string;
    isArchive: boolean;
    role: EmployeeRole;
    phone: string;
    birthday: string;

}
