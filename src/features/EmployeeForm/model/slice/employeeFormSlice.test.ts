import { Employee } from 'entities/Employee';
import { employeeFormActions, employeeFormReducer } from 'features/EmployeeForm/model/slice/employeeFormSlice';
import { EmployeeFormSchema } from 'features/EmployeeForm';

describe('employeeFormSlice.test', () => {
    const emptyForm: Omit<Employee, 'id'> = {
        birthday: '',
        isArchive: false,
        name: '',
        phone: '',
        role: 'cook',
    };

    const employee: Omit<Employee, 'id'> = {
        name: 'Test',
        role: 'cook',
        birthday: '17.12.1987',
        phone: '+7 (999) 999-9999',
        isArchive: false,
    };

    test('test reset to default', () => {
        const state: DeepPartial<EmployeeFormSchema> = {
            data: employee,
            formData: { ...employee, role: 'driver', name: 'Test' },
        };

        expect(employeeFormReducer(
            state as EmployeeFormSchema,
            employeeFormActions.resetToDefault(),
        )).toEqual({
            data: employee,
            formData: employee,
        });
    });

    test('test reset form', () => {
        const state: DeepPartial<EmployeeFormSchema> = {
            formData: employee,
        };

        expect(employeeFormReducer(
            state as EmployeeFormSchema,
            employeeFormActions.resetForm(),
        )).toEqual({
            formData: emptyForm,
        });
    });
});
