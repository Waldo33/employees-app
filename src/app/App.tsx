import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { EmployeesPage } from 'pages/EmployeesPage';
import { EmployeeEditPage } from 'pages/EmployeeEditPage';
import { MainLayout } from './layouts/MainLayout/ui/MainLayout';

const App = () => {
    const dispatch = useDispatch();

    return (
        <div className={classNames('app', {}, [])}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<EmployeesPage />} />
                    <Route path=":id" element={<EmployeeEditPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
