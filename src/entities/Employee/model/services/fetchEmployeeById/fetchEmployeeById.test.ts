import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchEmployeeById } from 'entities/Employee/model/services/fetchEmployeeById/fetchEmployeeById';
import { Employee } from '../../types/employee';

const employeeData: Employee = {
    name: 'Test',
    role: 'cook',
    birthday: '17.12.1987',
    phone: '+7 (999) 999-9999',
    isArchive: false,
    id: 1,
};
describe('fetchEmployeeById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchEmployeeById, {});
        thunk.api.get.mockReturnValue(Promise.resolve({
            data: employeeData,
        }));
        const result = await thunk.callThunk(1);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(employeeData);
    });

    test('failed', async () => {
        const thunk = new TestAsyncThunk(fetchEmployeeById, {});
        thunk.api.get.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const result = await thunk.callThunk(1);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('no data');
    });
});
