import React from 'react'

function Button({content}: {content: String}) {


  return (
   <div>
        <div className='bg-brand-orange w-1/2 md:w-1/5 p-4 m-2 mt-9 shadow-sm text-center rounded-xl text-white text-xl md:text-2xl font-bold transition duration-200 hover:bg-[#dc5d36]'>
            <h1>{content}</h1>
        </div>
   </div>
  )
}

export default Button