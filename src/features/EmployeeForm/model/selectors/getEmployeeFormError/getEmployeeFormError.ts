import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeFormError = (state: StateSchema) => state.employeeForm.error;
