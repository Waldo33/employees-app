# Employees App

## Стек технологий
- [React](https://ru.reactjs.org/ "React")
- [Redux Toolkit](https://redux-toolkit.js.org/ "Redux Toolkit")
- [Typescript](https://www.typescriptlang.org/ "Typescript")
- [react-input-mask](https://www.npmjs.com/package/react-input-mask "react-input-mask")
- [Material UI](https://mui.com/ "Material UI")

## Команды

### Запуск при разработке
`npm run start:dev` - запустить фронтенд и json-server

### Сборка
`npm run build:dev` - сборка в dev-режиме без минификации и с source-maps

`npm run build:prod` - сборка в prod-режиме с минификацией

`serve -s build` - запустить собранный проект

### Линтеры
`npm run lint:ts` - прогнать eslint

`npm run lint:ts:fix` - поправить ошибки линтера

### Тестирование
`npm run test:unit` - запустить unit-тесты

`npm run test:e2e` - запустить локально e2e-тесты

`npm run test:e2e:report` - посмотреть последний отчет

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

## Что можно улучшить
- Сделать хук [useObserverIntersection](https://usehooks-ts.com/react-hook/use-intersection-observer "useObserverIntersection") для создания ленивой подгрузки сотрудников на главной странице
- Сохранение фильтров в localStorage
- Разбить код на [ленивые компоненты](https://react.dev/reference/react/lazy "ленивые компоненты") и [динамически создаваемые/удаляемые редьюсеры](https://redux.js.org/usage/code-splitting "динамически создаваемые/удаляемые редьюсеры")
- Добавить [RTL-тесты](https://testing-library.com/docs/react-testing-library/intro/ "RTL-тесты")
- Валидация полей формы с отображением ошибок по каждому полю с помощью react-hook-form или собственной валидации.
