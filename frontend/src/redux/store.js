import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import productReducer from "./product/reducer";
import categoryReducer from "./category/reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
});

const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk],
});

export default store;
