import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

/**
 * @category shared
 * @subcategory hooks
 * @function useAppDispatch
 * @returns {AppDispatch}
 * @see {@link https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type | useDispatch}
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
