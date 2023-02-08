import http from './http';
import * as h from '@/types/api';

export const USER_LOGIN = async (params: null) => {
    return await http('/api/user/login', 'get', params);
};

export const GET_USER_INFO = async () => {
    return await http<h.ResUserInfo>('/api/user/info', 'get');
};

export const GET_PROJECT_LIST = async () => {
    return await http<h.ResUserInfo>('/api/project/list', 'get');
};

export const ADD_PROJECT = async (params: h.ReqProject) => {
    return await http<h.ResUserInfo>('/api/project', 'post', params);
};

export const EDIT_PROJECT = async (params: h.ReqProject) => {
    return await http<h.ResUserInfo>('/api/project', 'put', params);
};

export const DEL_PROJECT = async (params: h.ReqProject) => {
    return await http<h.ResUserInfo>('/api/project', 'delete', params);
};