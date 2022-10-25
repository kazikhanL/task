import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./filterSlice";

const store = configureStore({
    reducer: {
        filter: filterReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
