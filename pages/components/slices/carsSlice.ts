import {createSlice, 
    PayloadAction 
    } from '@reduxjs/toolkit'; 
    
    import {RootState} from "..//store"; 
    
    export interface CarState{ 
        cars:object[]
    }
    
    const initialState: CarState = { 
    
        cars:
        [
            {
    
            "id":1, 
            "model":"Ford", 
            "make":"explorer", 
            "year":"2005", 
            "price":3550 
            }
        ]
    
    
    }
    
    export const carSlice = createSlice({
    
        name:'cars', 
        initialState, 
        reducers:{
    
            addCar:(state: { cars: any[]; }, action:PayloadAction<Object>) => { 
                state.cars.push(action.payload)
    
            }
    
        },
    
    
    })
    //export action creators 
    export const {addCar} = carSlice.actions
    //Selector
    export const selectCars = (state:RootState) => state.car.cars
    //export as a reducer
    export default carSlice.reducer