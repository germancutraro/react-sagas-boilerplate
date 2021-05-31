import api from '@common/utils/api';

export const signIn = body => api('/auth/login', 'POST', body);

export const signUp = body => api('/auth/register', 'POST', body);

export const forgotPassword = body => api('/auth/forgot', 'POST', body);

export const resetPassword = password =>
  api('/auth/reset', 'PUT', { password });

export const confirmAccount = token => api(`/auth/confirm/${token}`);

export const editEmail = email => api('/auth/email', 'POST', { email });

export const editPassword = password =>
  api('/auth/password', 'PUT', { password });
