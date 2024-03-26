export type EmployeeRole = 'driver' | 'waiter' | 'cook';

/**
 * @category entities
 * @description Модель сотрудника
 */
export interface Employee {
    /**
     * Id текущего сотрудника
     */
    id: number;
    /**
     * ФИО текущего сотрудника
     * @example Тестовый Тест Тестович
     */
    name: string;
    /**
     * Находится ли текущий сотрудник в архиве
     */
    isArchive: boolean;
    /**
     * Роль текущего сотрудника - {@link EmployeeRole}
     */
    role: EmployeeRole;
    /**
     * Номер телефона сотрудника
     * @example +7(999)999-99-99
     */
    phone: string;
    /**
     * Дата рождения сотрудника
     * @example 12.03.1987
     */
    birthday: string;
}
