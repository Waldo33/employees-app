import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { EmployeesPage } from 'pages/EmployeesPage/ui/EmployeesPage';

const App = () => {
    const dispatch = useDispatch();

    return (
        <div className={classNames('app', {}, [])}>
            <Routes>
                <Route path="/" element={<EmployeesPage />} />
            </Routes>
        </div>
    );
};

export default App;
