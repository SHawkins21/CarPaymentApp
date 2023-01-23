import {useSelector} from "react-redux";
import {useState} from "react"; 
import {motion as m } from "framer-motion"; 

import Currency from "react-currency-formatter"

import { 

    selectState 




} from "../slices/loanSlice"; 

type Props = {}

const Details = (props: Props) => {

    const [details, setDetails] = useState(false)

    const openDetails = ():void =>{ 

        setDetails(!details)
        console.log(details);


    }

    const {
        credit,
        price,
        down,
        trade, 
        tax,
        taxBill, 
        totalPrice, 
        totalWithIntrest,
        intrestPaid, 
        payment, 
        months
    } = useSelector(selectState)

    return ((
        <div className="max-w-[620px] m-auto px-2 py-2 w-full" >
        <div className='w-full'>
        <m.div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
        <h1 className='py-4 text-[#0f07ed]'>Customize your payment</h1>
          <div className='flex items-center justify-between gap-4'>
            <div className='bg-sky-400 h-1 w-full'/>
            <div className='font-bold text-2xl pb-2'>${payment.toFixed(2)}/mo.</div>
            <div className='bg-sky-400 h-1 w-full'/>          
              </div>
          <p className=' text-center text-sm'>Estimated payment for {months} months at {credit}% APR*</p>
          
         <div className={details ? "open-detail":"close-detail"}>
         <div className="w-full my-5 text-xl transition-all duration-300">
            <ul>
                <li className="flex justify-between items-center my-1">
                    <div>Car Price</div>
                    <div>   <Currency quantity={parseInt(price)}/>  </div>
                </li>
                <li className="flex justify-between items-center my-1">
                    <div>Down Payment</div>
                    <div>
                        <Currency quantity={parseInt(down)}/>
                        </div>
                </li>
                <li className="flex justify-between items-center my-1">
                    <div>Trade-in Value</div>
                    <div>   <Currency quantity={parseInt(trade)}/></div>
                </li>
                <li className="flex justify-between items-center my-1">
                    <div>Sales Tax ({tax})%</div>
                    <div><Currency quantity={(taxBill)}/></div>
                </li>
                <li className="flex justify-between items-center my-1">
                    <div>Other fees*</div>
                    <div>not included</div>
                </li>
                <li>
                    <div className="bg-sky-300 w-full h-1 my-6"/>
                </li>
                <li className="flex justify-between items-center my-1 font-semibold">
                    <div>Total loan Amount</div>
                    <div>${totalPrice.toFixed(2)}</div>
                </li>
                <li className="flex justify-between items-center my-1 font-semibold">
                    <div>Total Intrest paid</div>
                    <div>+${intrestPaid.toFixed(2)}</div>
                </li>
                <li className="flex justify-between items-center my-1 font-semibold">
                    <div>Total loan & intrest paid</div>
                    <div>${totalWithIntrest.toFixed(2)}</div>
                </li>
                <li className="flex justify-between items-center my-1 font-semibold" >
                    <div>Monthly Payment</div>
                    <div>${payment.toFixed(2)}</div>
                </li>
    
    
            </ul>
    
         </div>
         </div>
         
         
          <div className='w-full flex justify-center pt-3'>
            <m.button 
             whileHover={{
                scale:1.1
             }}
             whileTap={{
                scale:0.9
             }}
             onClick={()=> openDetails()}
            className=' font-semibold text-cyan-400'>Show Details</m.button>
          </div>
        </m.div>
      </div>
      </div>
      )

    )




}


export default Details