import React from 'react'

function Statistic({ header, info }: { header: string, info: string }) {
  return (
    <div className='flex flex-col md:flex-row w-full items-center gap-5 mt-6 '>
      <h2 className='text-3xl w-full text-center md:text-right text-brand-orange'>{header}</h2>
      <p className='text-3xl text-center md:text-left w-full'>{info}</p>
    </div>
  )
}

export default Statistic