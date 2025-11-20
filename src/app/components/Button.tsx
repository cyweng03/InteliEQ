import React from 'react'

function Button({ image, content, onClick }: { image?: React.ReactNode, content?: string, onClick?: () => void }) {
  const hasContent = Boolean(content && content.trim().length > 0)

  return (
   <div
     className="flex flex-col items-start"
     onClick={onClick}
     role={onClick ? 'button' : undefined}
     tabIndex={onClick ? 0 : undefined}
     onKeyDown={onClick ? (e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
   >
        <div className="flex items-center justify-center">
          {image}
        </div>
        {hasContent && (
          <div className='bg-brand-orange w-2/3 md:w-1/4 p-4 mt-4 shadow-sm text-center rounded-xl text-white text-md md:text-2xl font-bold transition duration-200 hover:bg-[#dc5d36]'>
              <h1>{content}</h1>
          </div>
        )}
   </div>
  )
}

export default Button