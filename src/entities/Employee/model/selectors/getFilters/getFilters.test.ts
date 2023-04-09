import { StateSchema } from 'app/providers/StoreProvider';
import { getFilters } from './getFilters';

describe('getFilters.test', () => {
    test('should return role=cook and isArchive=false', () => {
        const state: DeepPartial<StateSchema> = {
            employees: {
                filters: {
                    role: 'cook',
                    isArchive: false,
                },
            },
        };

        expect(getFilters(state as StateSchema)).toEqual({
            role: 'cook',
            isArchive: false,
        });
    });
});
