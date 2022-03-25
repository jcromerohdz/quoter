import { useState, createContext } from "react"
import { getYearDifference, computeMake, computePlan, currencyFormat } from "../helpers"

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

  //const [modal, setModal] = useState(false)
  const [data, setData] = useState({
    make: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')
  const [result, setResult] = useState(0)

  const handleChangeData = e => {
    setData({
      ...data,
      [e.target.name] : e.target.value,

    }
    )
  }

  const quoteInsurance = () =>{
    // A base from the user
    let result = 2000

    // Obtain the deference in years
    const difference = getYearDifference(data.year)

    // Substract the 3% by year 
    result -= ((difference * 3) * result) / 100

    // American 15%
    // Eropean 30%
    // Asian 5%
    result *= computeMake(data.make)

    // Basic Plan 20% more
    // Complete Plan 50% more
    result *= computePlan(data.plan)
    result = currencyFormat(result)
    setResult(result)
  }

  return(
    <QuoterContext.Provider
      value={{
        //modal,
        //setModal
        data,
        handleChangeData,
        setError,
        error,
        quoteInsurance
      }}
    >
      {children}

    </QuoterContext.Provider>
  )
}

export {
  QuoterProvider
}

export default QuoterContext