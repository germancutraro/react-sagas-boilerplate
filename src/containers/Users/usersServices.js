import api from '@common/utils/api';

export const getAllUsers = () => api('/users?page=1&limit=10');

export const getOneUser = slug => api(`/users/${slug}`);
