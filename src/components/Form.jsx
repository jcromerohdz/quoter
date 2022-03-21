import { Fragment } from 'react'
import { MAKES, YEARS, PLANS } from '../constants'

const Form = () => {
  console.log(YEARS)
  return (
    <>

      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Make</label>
          <select 
            name="brand" 
            className="w-full p-3 bg-white border border-gray-200"
            id="">
              <option value="">-- Select Make --</option>
              {MAKES.map(make => (
                <option 
                  key={make.id}
                  value={make.id}
                >
                  {make.name}
                </option>
              ))}
            </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Year</label>
          <select 
            name="brand" 
            className="w-full p-3 bg-white border border-gray-200"
            id="">
              <option value="">-- Select Year --</option>
              {YEARS.map(year => (
                <option 
                  key={year}
                  value={year}
                >
                  {year}
                </option>
              ))}
            </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Plans</label>
          <div className='flex gap-3 items-center'>
            {PLANS.map(plan => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input type="radio" name='plan' value={plan.id} />
              </Fragment>
            ))}

          </div>
        </div>
        <input 
          type="submit"
          className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-md'
          value="Quote"
        />
      </form>
    </>
  )
}

export default Form