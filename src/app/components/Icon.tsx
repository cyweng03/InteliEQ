import React from 'react'

function Icon({ icon, title, content }: { icon: React.ReactNode, title?: string, content?: string }) {
  const hasTitle = Boolean(title && title.trim().length > 0)
  const hasContent = Boolean(content && content.trim().length > 0)

  return (
    <div className='flex flex-col items-center justify-center mt-3 text-center'>
      <div className='w-20 h-20 md:w-24 md:h-24 flex items-center justify-center'>
        {icon}
      </div>
      {hasTitle && <h2 className='type-card-title text-center text-black mt-4'>{title}</h2>}
      {hasContent && <p className='type-body text-center mt-4'>{content}</p>}
    </div>
  )
}

export default Icon