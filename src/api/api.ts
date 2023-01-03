import http from './http';
import * as h from '@/types/api';

export const USER_LOGIN = async (params: null) => {
    return await http('/api/user/login', 'get', params);
};