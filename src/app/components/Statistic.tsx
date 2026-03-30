import React from 'react'

function Statistic({ header, info }: { header: string, info: string }) {
  return (
    <div className='flex flex-col md:flex-row w-full items-center gap-5 mt-6'>
      <div className='flex md:hidden w-full items-center justify-center gap-2 text-center flex-wrap'>
        <span className='text-2xl font-semibold text-brand-orange leading-tight'>{header}</span>
         <span className='text-2xl leading-tight'>{info}</span>
      </div>
      <h2 className='hidden md:block text-3xl w-full text-right text-brand-orange'>{header}</h2>
      <p className='hidden md:block text-3xl text-left w-full'>{info}</p>
    </div>
  )
}

export default Statistic