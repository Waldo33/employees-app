# Employees App

## Стек технологий
- [React](https://ru.reactjs.org/ "React")
- [Redux Toolkit](https://redux-toolkit.js.org/ "Redux Toolkit")
- [Typescript](https://www.typescriptlang.org/ "Typescript")
- [react-input-mask](https://www.npmjs.com/package/react-input-mask "react-input-mask")
- [Material UI](https://mui.com/ "Material UI")

## Тесты

### unit
Для unit тестов использовал [jest](https://github.com/Waldo33/employees-app/tree/master/config/jest "jest"). Написал тесты на [селекторы](https://github.com/Waldo33/employees-app/blob/master/src/entities/Employee/model/selectors/getFilters/getFilters.test.ts "селекторы"), [экшены редьюсеров](https://github.com/Waldo33/employees-app/blob/master/src/entities/Employee/model/slice/employeesSlice.test.ts "экшены редьюсеров") и [async thunks](https://github.com/Waldo33/employees-app/blob/master/src/entities/Employee/model/services/editEmployeeById/editEmployeeById.test.ts "async thunks").

### e2e
Для e2e тестов решил использовать [Playwright](https://playwright.dev/ "Playwright"), так как удобен в использовании и набирает сейчас популярность, стало интересно его попробовать. Описал [три кейса](https://github.com/Waldo33/employees-app/blob/master/tests/employee.spec.ts "три кейса"): создание сотрудника, редактирование информции о сотруднике и поиск.

## CI/CD

### CI
Написал небольшой [workflow](https://github.com/Waldo33/employees-app/blob/master/.github/workflows/main.yml "workflow") для прогона unit и e2e тестов

### CD
Фронтенд задеплоил на [Netlify](https://www.netlify.com/ "Netlify"), бекэнд с json-сервером на [Render.com](https://render.com/ "Render.com").

## Что хотел сделать, но не успел
- Сделать хук [useObserverIntersection](https://usehooks-ts.com/react-hook/use-intersection-observer "useObserverIntersection") для создания ленивой подгрузки сотрудников на главной странице
- Сохранение фильтров в localStorage
- [Ленивые компоненты](https://legacy.reactjs.org/docs/code-splitting.html "Ленивые компоненты") и [динамически создаваемые/удаляемые редьюсеры](https://redux.js.org/usage/code-splitting "динамически создаваемые/удаляемые редьюсеры")
- [RTL-тесты](https://testing-library.com/docs/react-testing-library/intro/ "RTL-тесты")
- Валидация полей формы с отображением ошибок по каждому полю с помощью react-hook-form или собственной валидации.
