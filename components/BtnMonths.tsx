import {useDispatch} from "react-redux"; 
import {updateMonths} from "../slices/loanSlice"; 

type Props = {}

const BtnMonths = (props:Props) => {


  const dispatch = useDispatch()

  const getBtnValues = (months:string) => {

    dispatch(updateMonths(months))
  }
}

const Calculator = () => {
  return (
   <div></div>
    




  )
}

export default Calculator