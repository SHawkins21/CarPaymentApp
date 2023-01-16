import React from 'react'





const Form = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
    
            
            <div className='grid lg:grid-cols-5 gap-8'>
                
{/*Left*/}
 <div className='col-span-3 lg:col-span2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
 <div className='lg:p-4 h-full rounded-xl'>
    <div>
        <img className='rounded-xl flex items-center' src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt=""/>
    </div>
    <div>
        <h4 className='py-2'>Name Here</h4>
        <p>bla bla bla</p>
        <p>something something something \</p>
    </div>
    
        
    
    </div>   
</div>       



{/*Payment Calculator*/}
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>
        
<form>
<h1 className='py-4 text-[#0f07ed]'>Payment Calculator</h1>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Credit Score 

         <input 
         className='border-2 rounded-lg p-3 flex border-blue-300'type='range'
         />

        </label>
    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Down Payment
        
         <input 
         className='border-2 rounded-lg p-3 flex border-blue-300'type='text'
         />

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
        
         <input 
         className='border-2 rounded-lg p-3 flex border-blue-300'type='number'
         />

        </label>
    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Trade in Value
        
         <input 
         className='border-2 rounded-lg p-3 flex border-blue-300'type="text"
         />

        </label>
    </div>
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-4'>Down payment 
        
         <input 
         className='border-2 rounded-lg p-3 flex border-blue-300'type="text"
         />

        </label>
    </div>
        </div>
        {/*Buttons*/}
        <p className='text-align-center uppercase pt-8'>Length of Loan</p>
        <div className='flex items-center justify-between py-4'>
            

        

            <button className='w-quarter p-4 text to-blue-800 cursor-pointer'>36 months</button>
            <button className='w-quarter p-4 text to-blue-800 cursor-pointer'>48 months</button>
            <button className='w-quarter p-4 text to-blue-800 cursor-pointer'>60 months</button>
            <button className='w-quarter p-4 text to-blue-800 cursor-pointer'>72 months</button>

        </div>
    
        <div>
            <form>
            <h1 className='py-4 text-[#0f07ed]'>Monthly Payments</h1>
           
            </form>
        </div>

</form>

   
    </div>
</div>


{/*<h3 className='py-4 text-[#0f07ed]'>Customize Your Payment</h3>*/}
           
           
           
            </div>
        </div>
    </div>
  )
}

export default Form