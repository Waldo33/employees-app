import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { employeesReducer } from 'entities/Employee';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        employees: employeesReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
