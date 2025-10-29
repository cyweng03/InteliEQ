import React from 'react'

function Statistic({header, info}: {header: String, info: String}) {
  return (
    <div className='flex flex-col md:flex-row w-3/5 items-center gap-5 mt-6'>
        <h1 className='text-4xl font-bold w-full text-center md:text-right text-brand-orange'>{header}</h1>
        <p className='text-2xl text-center md:text-left w-full'>{info}</p>
    </div>
  )
}

export default Statistic