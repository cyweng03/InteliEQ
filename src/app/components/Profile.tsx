import React from 'react'

function Profile({image, name, title, email, linkedin}: {image: React.ReactNode, name: string, title: string, email: string, linkedin: string}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>{image}</div>
        <h1 className='text-2xl mb-2'>{name}</h1>
        <h2 className='text-lg'>{title}</h2>
        <h2 className='text-lg mb-2'>{email}</h2>
        <a href={linkedin} target="_blank" className='text-lg underline'>Linkedin</a>
    </div>
  )
}

export default Profile