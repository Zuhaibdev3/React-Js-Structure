import { configureStore } from "@reduxjs/toolkit";
import example from "./apps/example";
import auth from "./apps/auth"
const store = configureStore({
    reducer: {
        example,
        auth
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;

export const Redux = {
    getState: null, // Set the appropriate value or remove this line based on your implementation
    dispatch: AppDispatch,
};

export default store;
