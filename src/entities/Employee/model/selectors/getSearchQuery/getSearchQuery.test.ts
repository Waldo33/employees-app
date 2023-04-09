import { StateSchema } from 'app/providers/StoreProvider';
import { getSearchQuery } from './getSearchQuery';

describe('getSearchQuery.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            employees: {
                searchQuery: 'test',
            },
        };

        expect(getSearchQuery(state as StateSchema)).toEqual('test');
    });
});
