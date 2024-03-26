import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

/**
 * Типизированный {@link https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type | useDispatch}
 * @category shared
 * @function useAppDispatch
 * @returns {AppDispatch}
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
