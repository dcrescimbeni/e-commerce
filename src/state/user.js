import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendLoginRequest = createAsyncThunk('LOGIN', (form) => {
  return axios.post('/api/users/login', form).then((res) => res.data);
});
export const sendRegister = createAsyncThunk('REGISTER', (form) => {
  return axios
    .post('http://localhost:3001/api/users/register', form)
    .then((res) => console.log('RES.DATA =>', res.data));
});

export const getSession = createAsyncThunk('GET_SESSION', () => {
  return axios.get('/api/users/me').then((res) => res.data);
});

export const sendLogoutRequest = createAsyncThunk('SEND_LOGOUT', () => {
  return axios.get('/api/users/logout').then((res) => res.data);
});

export const userReducer = createReducer(
  {},
  {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendRegister.fulfilled]: (state, action) => action.payload,
    [getSession.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
);
