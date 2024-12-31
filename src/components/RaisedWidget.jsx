import React from 'react'

const RaisedWidget = ({fundDetail}) => {
    const {raised, goal, progress, deadline, remaining} = fundDetail
  return (
    <div className='m-2 p-8 rounded-lg shadow-md'>
        {/* raised and goal */}
        <div className="raised-goal grid grid-cols-2 justify-between mb-6">
            <div className="raised border-r text-center">
                <p className='text-gray-600'>Raised</p>
                <p className='font-bold text-xl text-green-500'>${raised}</p>
            </div>
            <div className="goal text-gray-600 text-center">
                <p>Goal</p>
                <p className='font-bold text-xl'>${goal}</p>
            </div>
        </div>
        {/* progress bar */}
        <div className='w-full h-3 bg-gray-500 rounded-xl'>
            <div className={`w-[${progress}] h-full bg-orange-500 rounded-xl`}></div>
        </div>
        <p className='text-center text-gray-700 font-semibold my-3'>
            {deadline}, {remaining} Day Left
        </p>
        <button className="donate-btn bg-[#24A599] w-full rounded-lg py-3 text-white font-semibold">Donate Now</button>
        <p className='text-[#24A599] text-center font-semibold my-5'>Share</p>
    </div>
  )
}

export default RaisedWidget