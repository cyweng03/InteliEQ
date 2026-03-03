import React from 'react'

function Statistic({ header, info }: { header: string, info: string }) {
  return (
    <div className='flex flex-col md:flex-row w-3/5 items-center gap-5 mt-6'>
      <h2 className='type-section-title-sm w-full text-center md:text-right text-brand-orange'>{header}</h2>
      <p className='type-subtitle text-center md:text-left w-full'>{info}</p>
    </div>
  )
}

export default Statistic