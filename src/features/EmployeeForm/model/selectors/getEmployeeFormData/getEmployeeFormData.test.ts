import { Employee } from 'entities/Employee';
import { StateSchema } from 'app/providers/StoreProvider';
import { getEmployeeFormData } from './getEmployeeFormData';

describe('getEmployeeFormData.test', () => {
    const employee: Omit<Employee, 'id'> = {
        name: 'Test',
        role: 'cook',
        birthday: '17.12.1987',
        phone: '+7 (999) 999-9999',
        isArchive: false,
    };

    test('should return formData', () => {
        const state: DeepPartial<StateSchema> = {
            employeeForm: {
                formData: employee,
            },
        };

        expect(getEmployeeFormData(state as StateSchema)).toEqual(employee);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {
            employeeForm: {},
        };

        expect(getEmployeeFormData(state as StateSchema)).toEqual(undefined);
    });
});
