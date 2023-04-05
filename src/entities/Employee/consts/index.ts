import { SortType } from 'entities/Employee/model/types/employeesSchema';
import { EmployeeRole } from 'entities/Employee';

export const SORT_TYPES: Record<SortType, string> = {
    name: 'по имени',
    birthday: 'по дню рождения',
};

export const STRING_ROLES: Record<EmployeeRole, string> = {
    cook: 'Повар',
    driver: 'Водитель',
    waiter: 'Официант',
};
