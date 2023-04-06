import { StateSchema } from 'app/providers/StoreProvider';
import { getEmployees } from '../../slice/employeesSlice';

export const getEmployeeById = (id: number) => (state: StateSchema) => getEmployees.selectById(state, id);
