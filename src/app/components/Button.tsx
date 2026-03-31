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
        <div className='bg-brand-orange px-6 py-3 mt-4 shadow-md text-center rounded-xl text-white text-md md:text-xl font-bold transition duration-200 hover:bg-[#dc5d36] inline-flex items-center justify-center whitespace-nowrap'>              <h1>{content}</h1>
        </div>
      )}
    </div>
  )
}

export default Button