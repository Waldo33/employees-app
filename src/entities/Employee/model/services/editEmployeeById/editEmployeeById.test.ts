import { Employee } from 'entities/Employee';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { editEmployeeById } from './editEmployeeById';

const employeeData: Employee = {
    name: 'Test',
    role: 'cook',
    birthday: '17.12.1987',
    phone: '+7 (999) 999-9999',
    isArchive: false,
    id: 1,
};
describe('editEmployeeById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(editEmployeeById, {
            employeeForm: {
                formData: employeeData,
            },
        });
        thunk.api.patch.mockReturnValue(Promise.resolve({
            data: employeeData,
        }));
        const result = await thunk.callThunk(employeeData);

        expect(thunk.api.patch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(employeeData);
    });

    test('failed', async () => {
        const thunk = new TestAsyncThunk(editEmployeeById, {
            employeeForm: {
                formData: employeeData,
            },
        });
        thunk.api.patch.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const result = await thunk.callThunk(employeeData);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });

    test('empty data', async () => {
        const thunk = new TestAsyncThunk(editEmployeeById, {
            employeeForm: {
                formData: {
                    name: '',
                    isArchive: false,
                    phone: '',
                    birthday: '',
                    role: 'cook',
                },
            },
        });
        const result = await thunk.callThunk(employeeData);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
