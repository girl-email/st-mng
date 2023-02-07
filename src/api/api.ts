import http from './http';
import * as h from '@/types/api';

export const USER_LOGIN = async (params: null) => {
    return await http('/api/user/login', 'get', params);
};

export const GET_USER_INFO = async () => {
    return await http<h.ResUserInfo>('/api/user/info', 'get');
};