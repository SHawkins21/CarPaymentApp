import {configureStore} from '@reduxjs/toolkit'
import carSlice from "./slices/carSlice";

export const store = configureStore({
    reducer: { 
        car: carSlice
    
    },
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
