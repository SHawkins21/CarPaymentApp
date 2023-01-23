import {useDispatch} from "react-redux"; 
import {updateMonths} from "../slices/loanSlice"; 

type Props = {}

const BtnMonths = (props:Props) => {


  const dispatch = useDispatch()

  const getBtnValues = (months:string) => {

    dispatch(updateMonths(months))
  }


  return (
    <>   
    
    <div className='flex items-center justify-between py-10'>
     
      <button className="btns bg-blue-400 font-bold  px-10 py-4 rounded-lg" onClick={() => getBtnValues("36")}>36</button>
      <button className="btns bg-blue-400 font-bold  px-10 py-4 rounded-lg" onClick={() => getBtnValues("48")}>48</button>
      <button className="btns bg-blue-400 font-bold  px-10 py-4 rounded-lg" onClick={() => getBtnValues("60")}>60</button>
      <button className="btns bg-blue-400 font-bold  px-10 py-4 rounded-lg" onClick={() => getBtnValues("72")}>72</button>
    </div>
    </>
  )
}

export default BtnMonths



