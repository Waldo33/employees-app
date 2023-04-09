import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeFormIsLoading = (state: StateSchema) => state.employeeForm.isLoading || false;
