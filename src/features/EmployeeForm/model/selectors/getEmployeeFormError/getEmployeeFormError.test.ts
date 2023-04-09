import { StateSchema } from 'app/providers/StoreProvider';
import { getEmployeeFormError } from './getEmployeeFormError';

describe('getEmployeeFormError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            employeeForm: {
                error: 'error',
            },
        };

        expect(getEmployeeFormError(state as StateSchema)).toEqual('error');
    });

    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            employeeForm: {},
        };

        expect(getEmployeeFormError(state as StateSchema)).toEqual(undefined);
    });
});
