import {
    Employee, employeesActions, employeesReducer, fetchEmployees,
} from 'entities/Employee';
import { EmployeesSchema } from '../types/employeesSchema';

describe('employeesSlice.test', () => {
    const data: Employee[] = [
        {
            name: 'Test',
            role: 'driver',
            isArchive: false,
            birthday: '12.12.2001',
            phone: '8 (999) 999-9999',
            id: 1,
        },
    ];

    test('test filters', () => {
        const state: DeepPartial<EmployeesSchema> = {
            filters: {
                role: 'driver',
                isArchive: false,
            },
        };

        expect(employeesReducer(
            state as EmployeesSchema,
            employeesActions.setFilterRole('waiter'),
        )).toEqual({
            ...state,
            filters: {
                role: 'waiter',
                isArchive: false,
            },
        });

        expect(employeesReducer(
            state as EmployeesSchema,
            employeesActions.setFilterIsArchive(true),
        )).toEqual({
            ...state,
            filters: {
                role: 'driver',
                isArchive: true,
            },
        });

        expect(employeesReducer(
            state as EmployeesSchema,
            employeesActions.resetFilters(),
        )).toEqual({
            ...state,
            filters: {
                role: undefined,
                isArchive: false,
            },
        });
    });

    test('test sort', () => {
        const state: DeepPartial<EmployeesSchema> = {
            sort: {
                type: 'name',
                order: 'asc',
            },
        };

        expect(employeesReducer(
            state as EmployeesSchema,
            employeesActions.setSortType('birthday'),
        )).toEqual({
            ...state,
            sort: {
                type: 'birthday',
                order: 'asc',
            },
        });

        expect(employeesReducer(
            state as EmployeesSchema,
            employeesActions.setSortOrder('desc'),
        )).toEqual({
            ...state,
            sort: {
                type: 'name',
                order: 'desc',
            },
        });
    });

    test('test fetch employees pending', () => {
        const state: DeepPartial<EmployeesSchema> = {
            isLoading: false,
            error: 'test',
        };

        expect(employeesReducer(
            state as EmployeesSchema,
            fetchEmployees.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetch employees fulfilled', () => {
        const state: DeepPartial<EmployeesSchema> = {
            isLoading: true,
            ids: [],
            entities: {},
        };

        expect(employeesReducer(
            state as EmployeesSchema,
            fetchEmployees.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            entities: {
                1: { ...data[0] },
            },
            ids: [1],
        });
    });
});
