import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getOrder = createAsyncThunk('GET_ORDERS', () => {
    return axios.get('/api/orders').then((res) => res.data);
});

export const saveOrder = createAsyncThunk('SAVE_ORDERS', (id, order) => {
    console.log("Orden desde Thunk")
    console.log(order)
    return axios.post(`/api/orders/thanks/${id}`, order).then((res) => res.data);
    // return axios.post(`/api/orders/thanks/${id}`, { address: "Argentina", total: 1000, products: [1, 2] }).then((res) => res.data);
    // return axios.post(`/api/orders/thanks/${id}`, order).then((res) => res.data);
});

export const ordersReducer = createReducer(
    {},
    {
        [getOrder.fulfilled]: (state, action) => action.payload,
        [saveOrder.fulfilled]: (state, action) => action.payload,
    }
);