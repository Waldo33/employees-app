import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EmployeesPage } from 'pages/EmployeesPage';
import { EmployeeAddPage, EmployeeEditPage } from 'pages';
import { MainLayout } from './layouts/MainLayout/ui/MainLayout';

const App = () => {
    const dispatch = useDispatch();

    return (
        <div className={classNames('app', {}, [])}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/employees" replace />} />
                    <Route path="/employees" element={<EmployeesPage />} />
                    <Route path="/employees/add" element={<EmployeeAddPage />} />
                    <Route path="/employees/:id" element={<EmployeeEditPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
