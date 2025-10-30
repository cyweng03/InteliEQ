import React from 'react'
import Image, {StaticImageData} from 'next/image';

function Solutions({title, image, caption, learn_more} : {title: string, image: string | StaticImageData, caption: string, learn_more: string}) {
  return (
    <div className = "w-[300px] mx-auto text-left my-4">
        <h1 className = "text-2xl font-bold mb-2"><strong>{title}</strong></h1>
        <Image src={image} alt = {title} width = {300} height = {100} className = "my-4"/>
        <p className = "mb-4 w-[300px]">{caption}</p>
        <a href = {learn_more} className = "block w-[300px] text-brand-black underline hover:text-brand-orange transition duration-200">Learn More</a>
    </div>

  )
}

export default Solutions