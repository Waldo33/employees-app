import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeesIsLoading = (state: StateSchema) => state.employees.isLoading || false;
