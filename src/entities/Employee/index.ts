export { EmployeeCardList } from './ui/EmployeeCardList/EmployeeCardList';

export { getEmployees } from './model/selectors/getEmployees/getEmployees';
export { getFilteredEmployees } from './model/selectors/getFilteredEmployees/getFilteredEmployees';

export { fetchEmployees } from './model/services/fetchEmployees/fetchEmployees';
export { employeesReducer, employeesActions } from './model/slice/employeesSlice';
export type { EmployeeRole } from './model/types/employee';
