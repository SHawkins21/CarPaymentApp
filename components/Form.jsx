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

         
    {/*<button 
        id="dropdownDefaultButton" 
        data-dropdown-toggle="dropdown" 
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        type="button">Dropdown button 
    <svg 
         class="w-4 h-4 ml-2"
         aria-hidden="true"
         fill="none" 
         stroke="currentColor" 
         viewBox="0 0 24 24">
        
    </svg>
</button>

 <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Fair</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Above Fair</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Good</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Great</a>
      </li>
    </ul>
  </div>*/}


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
        <p className='text-align-center uppercase pt-8'>Length of Loan (In months)</p>
        <div className='flex items-center justify-between py-4'>
            

        
      <button className="btns" onClick={() => getBtnValues("36")}>36</button>
      <button className="btns" onClick={() => getBtnValues("48")}>48</button>
      <button className="btns" onClick={() => getBtnValues("60")}>60</button>
      <button className="btns" onClick={() => getBtnValues("72")}>72</button>
            

        </div>
</form>
<from>
    <div>
        
    </div>
</from>
   
    </div>
</div>


{/*<h3 className='py-4 text-[#0f07ed]'>Customize Your Payment</h3>*/}
           
           
           
            </div>
        </div>
    </div>
  )
}

export default Form