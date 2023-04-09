import { StateSchema } from 'app/providers/StoreProvider';
import { getEmployeesIsLoading } from './getEmployeesIsLoading';

describe('getEmployeesIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            employees: {
                isLoading: true,
            },
        };

        expect(getEmployeesIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            employees: {},
        };

        expect(getEmployeesIsLoading(state as StateSchema)).toEqual(false);
    });
});
