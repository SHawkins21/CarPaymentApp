import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'; 
import {calculateEMI, calulateTax, loanDetails} from "../workers"; 

//create interface
export interface LoanState{ 
    credit:string,
    tax:string,
    trade:string, 
    down:string, 
    price:string, 
    months:string, 
    payment:number, 
    totalPrice:number, 
    intrestPaid:number, 
    totalWithIntrest:number, 

    taxBill:number, 

}

const initialState: LoanState = {

    credit:"19.5",
    tax:"7.0",
    trade:"1000",
    down:"1000",
    price:"6000",
    months:"36",
    payment:0,
    totalPrice:0,
    intrestPaid:0,
    taxBill:0,
    totalWithIntrest:0,
}

export const loanSlice = createSlice({

name:'loans', 
initialState, 
reducers:{ 

    processLoan:(state):void => {
        const {tax, 
               trade, 
               down, 
               price, 
               credit, 
               months, 
               totalPrice, 
               intrestPaid, 
               totalWithIntrest, 
               taxBill} = state;
               
               const d = calulateTax(tax, trade, down, price); 

               state.totalPrice = d.total
               state.taxBill = d.tax

               const monthlyPayment = calculateEMI(d.total, credit, months)

               state.payment = monthlyPayment

               const details = loanDetails(monthlyPayment, months, totalPrice)

               console.log(details); 

               const loan = Object.entries(details).map(([key, val]) =>(


                        val 
               ))
                console.log(loan);
                state.totalWithIntrest = loan[0]
                state.intrestPaid = loan[1]
















    },
    updateCredit:(state, action:PayloadAction<string>):void => {

        state.credit = action.payload

    }, 
    updateTax:(state, action:PayloadAction<string>):void => {
        state.tax = action.payload
    },
    updateDown: (state, action:PayloadAction<string>):void => { 
        state.down = action.payload
    },
    updatePrice:(state, action:PayloadAction<string>):void => { 
        state.price = action.payload
    }, 
    updateMonths:(state, action:PayloadAction<string>):void => { 
        state.months = action.payload
    }, 

    updatePayment :(state, action:PayloadAction<number>):void => { 
        state.payment = action.payload
    },
    updateTrade:(state, action:PayloadAction<string>):void => {
          
        state.trade = action.payload
    },

}})
// export Actions
export const {updateCredit, 
    updateDown,
    updateMonths,
    updatePrice,
    updateTax,
    updateTrade,
    updatePayment, 
    processLoan, 


} = loanSlice.actions

// export selctor

export const selectState = (state:RootState) => state.loan




export default loanSlice.reducer