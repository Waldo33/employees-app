import { StateSchema } from 'app/providers/StoreProvider';

export const getFilteredEmployees = (state: StateSchema) => state.employees.filteredData;
