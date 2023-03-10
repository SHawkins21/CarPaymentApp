import {useState, useRef, useEffect} from "react"; 
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useForm} from "react-hook-form";
import {motion as m } from "framer-motion"; 
import Form from '../components/Form';
import Calculator from "../components/Calculator";
import { useSelector, useDispatch } from 'react-redux';
import { selectCredit } from "../slices/loanSlice"; 
import Details from '../components/Details'; 

import BtnMonths from '../components/BtnMonths'
// import { selectCars, addCar} from "../slices/loanSlice";

const Home: NextPage = () => {

// const cars = useSelector(selectCars)
const dispatch = useDispatch()

//const addCars = () => {

  //const newCar = {
    
   // "id": 3,
   // "model" : "Toyoda",
   // "make" : "Avalon",
   // "year" : "2020",
   // "Price" : "48940",
  //}

  //dispatch(addCar(newCar))

//}


useEffect(() => {

  
  })
  return (
    <>
      <Head>
        <title>Car Payment App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
        
          
          {/*<div>
            <ul>
              {
                cars.map(({id,model,make,year,price}: any) =>(
                    <li key={id}>
                        <div>
                          {make}
                        </div>
                        <div>
                          {model}
                        </div>

                    </li>

                ))
              }
            <button className='bg-green-500 px-4 py-3 text-white fornt-semibold' onClick= {()=> addCars()}>Buy Car</button>

            </ul> 
            </div> */}
          
        </h1>

        
      </main>
   
      <Form /> 
      <Calculator /> 
 
      
      
    </>
    
    

    



  )


  
}

export default Home