import React from 'react'
interface props{
    image:any,
    text:String
}

export const CircularCards = ({image,text}:props) => {
  return (
    <div className='circularCont'>
        <img className='circularImg' src={image} alt="image" />
        <h3 className='circularText'>{text}</h3>
    </div>
  )
}
