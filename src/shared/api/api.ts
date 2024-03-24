import axios from 'axios';

/**
 * @category shared
 * @constant $api
 * @see {@link https://axios-http.com/ru/docs/instance | Axios Instance}
 */

export const $api = axios.create({
    baseURL: __API__,
});
