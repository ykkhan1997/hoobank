import React from 'react'
import { stats } from '@/constants'

const Stats = () => {
  return (
    <section className='flex justify-center items-center flex-wrap sm:mb-20 mb-6'>
        {
            stats.map((stat)=>(
                <div className='flex-1 flex justify-start items-center flex-row m-3' key={stat.id}>
                    <h4 className='font-poppins font-semibold xs:text-[40.3px] text-[30px] xs:leading-[53.8px] leading-[43.8px] text-white'>{stat.value}</h4>
                    <p className='font-poppins font-normal xs:text-[20.8px] text-[15.8px] xs:leading-[24.8px] leading-[20.8px] uppercase ml-3 text-secondary'>{stat.title}</p>
                </div>
            ))
        }
    </section>
  )
}

export default Stats