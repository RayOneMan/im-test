import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./slices/SidebarSlice"

export const store = configureStore({
    reducer: {
        sidebar
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;