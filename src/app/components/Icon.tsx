import React, { useState } from 'react'

function Icon({ icon, title, content }: { icon: React.ReactNode, title?: string, content?: string }) {
  const hasTitle = Boolean(title && title.trim().length > 0)
  const hasContent = Boolean(content && content.trim().length > 0)

  const [hovered, setHovered] = useState(false)
  const [scrollEnabled, setScrollEnabled] = useState(false)

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => {
    setHovered(false)
    setScrollEnabled(false)
  }

  const handleTransitionEnd: React.TransitionEventHandler<HTMLParagraphElement> = (e) => {
    if (e.propertyName === 'max-height' && hovered) {
      // once expansion finishes and we're still hovered, enable scrolling
      setScrollEnabled(true)
    }
  }

  return (
    <div
      className='border-animated flex flex-col items-center justify-center mt-3 text-center rounded-lg shadow-lg p-5 group'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='w-20 h-20 md:w-24 md:h-24 flex items-center justify-center'>
        {icon}
      </div>
      {hasTitle && <h2 className='type-card-title text-center text-black mt-4'>{title}</h2>}
      {hasContent && (
        <p
          className={`type-body text-center mt-0 group-hover:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-40 ${
            scrollEnabled ? 'overflow-y-auto' : 'overflow-hidden'
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          {content}
        </p>
      )}
    </div>
  )
}

export default Icon