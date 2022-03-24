import { useState, createContext } from "react"

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

  //const [modal, setModal] = useState(false)
  const [data, setData] = useState({
    make: '',
    year: '',
    plan: ''
  })

  const handleChangeData = e => {
    console.log(e.target.name)
    console.log(e.target.value)
    setData({
      ...data,
      [e.target.name] : e.target.value,

    }
    )
  }

  return(
    <QuoterContext.Provider
      value={{
        //modal,
        //setModal
        data,
        handleChangeData
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