import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cartSlice'
import modalReducer from "./reducers/modalSlice";
import cartModalReducer from './reducers/cartModalSlice'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
        cartModal:cartModalReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
