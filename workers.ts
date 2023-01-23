// Loan functions or calcualtions 

interface workers{
    calulateTax(
        tax:string, 
        downPayment:string, 
        price:string) : number; 
}

export const calulateTax = (tax:string, 
                            trade:string, 
                            downPayment:string,
                            price:string) : object => {

let taxes = parseFloat(tax) /100
let tradeIn = parseFloat(trade)
let downPayments = parseFloat(downPayment)
let totalMoneyDown = (tradeIn + downPayments)
let car = parseFloat(price)
let bal = (car - totalMoneyDown)
let taxAmount = Math.round(bal * taxes)
let totalPrice = (taxAmount + bal)

return{
    total:totalPrice, 
    tax:taxAmount
}



}

export const calculateEMI = (   total:number, 
                                credit:string, 
                                months:string ) : number => {
                                
  let invoice = total 
  console.log(invoice + "total");

  let intrest = parseFloat(credit) /12/100
  console.log(intrest + "Intrest"); 

  let loanDuration = parseInt(months)
  console.log(loanDuration + "loan amount"); 

  let emi = invoice * intrest * (Math.pow(1 + intrest, loanDuration) / (Math.pow(1 + intrest, loanDuration) -1))
  console.log(Math.round(emi) + "My EMI"); 
   const paym = emi 
   


 return paym

}

export const loanDetails = (emi:number, 
                            months:string, 
                            total:number): Object => {

let loanDuration = parseInt(months)
console.log(months + "months of loan"); 

let totalLoan = loanDuration * emi 
console.log(emi); 

let totalIntrest = totalLoan - total

console.log(totalLoan + "total loan"); 
console.log(totalIntrest + "total intrest"); 

const obj = {

    totalLoan,
    totalIntrest,


}
 return obj 

}


