import {configureStore} from '@reduxjs/toolkit'
import loanSlice from "./slices/loanSlice";

export const store = configureStore({
    reducer: { 
        car: loanSlice
    
    },
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
