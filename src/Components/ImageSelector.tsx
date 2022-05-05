import React from 'react'

interface image{
    image:any,
    description:String
}

interface props {
    data:image[]
}

export const ImageSelector = ({data}:props) => {
  return (
    <div>ImageSelector</div>
  )
}
