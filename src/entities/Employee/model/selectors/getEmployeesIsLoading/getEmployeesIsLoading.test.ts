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
});
