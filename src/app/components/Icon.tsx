import React from 'react'

function Icon({icon, text}: {icon: React.ReactNode, text: string}) {
  return (
    <div className='flex flex-col items-center justify-center mt-3'>
        {icon}
        <h1 className='font-bold text-3xl text-center text-black mt-2'>{text}</h1>
    </div>
  )
}

export default Icon