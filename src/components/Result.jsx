import { useCallback , useMemo, useRef } from 'react'
import useQuoter from "../hooks/useQuoter"
import { MAKES, PLANS } from "../constants"

const Result = () => {

  const { result, data } = useQuoter()
  const { make, plan, year } = data
  const yearRef = useRef(year)

  const [makeName] = useMemo(() => MAKES.filter(m => m.id === Number(make)), [result])
  const [planName] = useMemo(() => PLANS.filter(p => p.id === Number(plan)), [result])

  if(result === 0) return null


  return (
    <div className="bg-gray-100 text-center mt-5 p-5 rounded-md shadow">
      <h2 className="text-gray-500 font-black text-2xl">
        Summary
      </h2>
      <p className="my-2">
        <span className="font-bold">Make: </span>
        {makeName.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {planName.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Year: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Price: </span>
        {result}
      </p>
    </div>
  )
}

export default Result