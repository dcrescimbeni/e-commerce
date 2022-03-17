import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";

import { userReducer } from './user';
import { productsReducer } from './products';
import { ordersReducer } from './orders';


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        products: productsReducer,
        order: ordersReducer,

    },
});

export default store;