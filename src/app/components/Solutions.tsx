import React from 'react'

function Solutions({title, image, caption, learn_more} : {title: string, image: string, caption: string, learn_more: string}) {
  return (
    <div>Solutions
        <h1>{title}</h1>
        <img src = {image} />
        <p>{caption}</p>
        <a href = {learn_more}>Learn More</a>
    </div>

  )
}

export default Solutions