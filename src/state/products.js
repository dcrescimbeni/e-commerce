import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsRequest = createAsyncThunk("PRODUCTS", () => {
    return axios.get("/api/products/allProducts").then((r) => r.data);
});

export const filteredProducts = createAsyncThunk("FILTER_PRODUCTS", (id) => {
    return axios.get(`/api/products/allProducts/${id}`).then((r) => r.data);
});

export const postProduct = createAsyncThunk("POST_PRODUCT", (post) => {
    return axios.post(`/api/product/newProduct`, post).then((r) => r.data);
});

export const productsReducer = createReducer([], {
    [getProductsRequest.fulfilled]: (state, action) => action.payload,
    [filteredProducts.fulfilled]: (state, action) => action.payload,
    [postProduct.fulfilled]: (state, action) => action.payload,
});

//https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb

//https://github.com/LMPerera/redux-toolkit/blob/main/src/services.js