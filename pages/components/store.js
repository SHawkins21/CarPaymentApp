import {createStore} from "redux"

const intialState = { 
    amount: "12.00",
    currencyCode: "USD"
}; 

function reducer(state = intialState, action){
    return state; 
};

export const store = createStore(reducer);