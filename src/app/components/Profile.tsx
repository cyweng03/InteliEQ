import React from 'react'

function Profile({ image, name, title, email, linkedin }: { image: React.ReactNode, name: string, title: string, email: string, linkedin: string }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>{image}</div>
      <h2 className='type-card-title-sm mb-2'>{name}</h2>
      <p className='type-body'>{title}</p>
      <p className='type-body mb-2'>{email}</p>
      <a href={linkedin} target="_blank" className='type-body underline hover:text-brand-orange'>Linkedin</a>
    </div>
  )
}

export default Profile