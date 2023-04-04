import { EmployeeRole } from '../../model/types/employee';

const humanReadableRoles: Record<EmployeeRole, string> = {
    driver: 'Водитель',
    cook: 'Повар',
    waiter: 'Официант',
};
export const formatRole = (role: EmployeeRole) => humanReadableRoles[role];
