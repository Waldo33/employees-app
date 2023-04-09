import { StateSchema } from 'app/providers/StoreProvider';
import { getEmployeeFormIsLoading } from './getEmployeeFormIsLoading';

describe('getEmployeeFormIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            employeeForm: {
                isLoading: true,
            },
        };

        expect(getEmployeeFormIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            employeeForm: {},
        };

        expect(getEmployeeFormIsLoading(state as StateSchema)).toEqual(false);
    });
});
