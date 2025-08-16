import React from 'react'
import { RxBox } from 'react-icons/rx'

const TryPremiumTitle = () => {
  return (
    <div className='w-full h-[110px] rounded-[10px] bg-white p-[15px]  border-1 border-gray-100 '>

            <p className='font-sans font-medium  text-[17px] text-gray-500 pb-2'>Access exclusive tools & insights</p>
            <div className="flex gap-x-2 items-center">
                <RxBox />
                <p className='font-sans font-medium  text-[17px] '>Try Premium for BDT0</p>
            </div>
     

    </div>
  )
}

export default TryPremiumTitle