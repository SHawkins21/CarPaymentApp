import {configureStore} from '@reduxjs/toolkit'
import carSlice from "./slices/carsSlice";

export const store = configureStore({
    reducer: { 
        car: carSlice
    
    },
})

export type RootState = ReturnType<typeof store.getState> 
export type appdispatch = typeof store.dispatch
