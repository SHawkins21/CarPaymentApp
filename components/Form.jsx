
import { useSelector,useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {   selectState,    
    updateCredit,
    updateDown, 
    updatePrice,
    updateTax,
    updateTrade,
    processLoan,
     
        } from "../slices/loanSlice";
import BtnMonths from "./BtnMonths";

//type Props ={}

const Form = () => {
  
    const dispatch = useDispatch();  
    const checkState = useSelector(selectState)
    const {tax,trade,down} = checkState

    useEffect(() => {
     
        dispatch(processLoan())
    }, [checkState])

    const { register, formState: { errors } } = useForm();


    const handleOnchangeTax = (event) => {

        //grab data
        let tax = event.target.value
        
    
          dispatch(updateTax(tax))
        
        }
    
    
    const handleOnchangeTrade = (event) => {
            let trade  =  event.target.value    
  
   
        dispatch(updateTrade(trade))
    }
    const handleOnchangeEst = (event)=> {
        let down = event.target.value

    dispatch(updateDown(down))
    }
    const onChangeSelect = (event) => {

        const credits = event.target.value
    
         dispatch(updateCredit(credits ))
    }
    const handleOnchangePrice = (event) => {

        const price = event.target.value
       
          dispatch(updatePrice(price))
    }  










  return (

    

    <div className='w-full lg:h-screen'>
        <div className='max-w-[620px] m-auto px-2 py-2 w-full'>
    
            
            
                
{/*Left*/}
 
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    
        
<form>
<h1 className='py-4 text-[#0f07ed]'>Payment Calculator</h1>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
    <div className='flex flex-col'>


        <label className='uppercase text-sm py-4'>Sticker Price
        <select onChange={handleOnchangePrice}
         className='inputs border-2 rounded-lg p-3 flex border-blue-300'name="credit-rating" id="credit-r" placeholder='Down Payment'>
            <option value="6000">$6,000</option>
              <option value="7000">$7,500</option>
              <option value="8075">$8,075</option>
              <option value="9300">$9,300</option>
              <option value="12500">$12,500</option>
              <option value="17099">$17,099</option>
              <option value="20049">$20,049</option>
              <option value="26894">$26,894</option>
         </select>
         </label>



    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Credit
        
         <select onChange={onChangeSelect}
         className='inputs border-2 rounded-lg p-3 flex border-blue-300'name="credit-rating" id="credit-r" placeholder='Your credit rating'>
         
         <option value="19.5">Fair (619 and below)</option>
         <option value="14.5">Average (620 - 699)</option>
         <option value="8.5">Good (700 - 779)</option>
         <option value="7">Great (780 - 850)</option>

         </select>
        </label>



    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Credit Rating 
        
         <input 
         className='border-2 rounded-lg p-3 flex border-blue-300'type="text"
         />

        </label>
    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Zip Code 
        
         <input className='inputs border-2 rounded-lg p-3 flex border-blue-300'onChange={handleOnchangeTax} defaultValue={'Zip Code'}></input>
         
        

        </label>
    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Trade in Value
        
         <input 
         className='inputs border-2 rounded-lg p-3 flex border-blue-300'type="text"placeholder='Trade-in value'onChange={handleOnchangeTrade} defaultValue={trade}
         />

        </label>
    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Down payment 
        
         <input 
         className='inputs border-2 rounded-lg p-3 flex border-blue-300'placeholder='Down payment'type="text"onChange={handleOnchangeEst} defaultValue={down}
         />

        </label>
    </div>
        </div>
        {/*Buttons*/}
        <p className='text-align-center uppercase pt-8'>Length of Loan (In months)</p>
        <BtnMonths/>
        
        {/* <div className='flex items-center justify-between py-10'>
            
      <button className="btns" onClick={() => getBtnValues("36")}>36</button>
      <button className="btns" onClick={() => getBtnValues("48")}>48</button>
      <button className="btns" onClick={() => getBtnValues("60")}>60</button>
      <button className="btns" onClick={() => getBtnValues("72")}>72</button>
            

        </div> */}
</form>
 
</div>


{/*<h3 className='py-4 text-[#0f07ed]'>Customize Your Payment</h3>*/}
           
           
           
            
</div>
</div>
  )
}

export default Form