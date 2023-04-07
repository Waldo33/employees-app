import { StateSchema } from 'app/providers/StoreProvider';

export const getEmployeeFormData = (state: StateSchema) => state.employeeForm.formData;
