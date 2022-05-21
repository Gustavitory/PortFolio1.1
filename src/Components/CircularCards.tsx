import React from 'react'
import '../Styles/circularMenu/CircularCard.css'
interface props{
    image:any,
    text:String,
    action:any
}

export const CircularCards = ({image,text,action}:props) => {
  return (
    <div className='circularCont' onClick={()=>action(text)}>
        <img className='circularImg' src={image} alt={`${text}`} />
        <h3 className='circularText'>{text}</h3>
    </div>
  )
}
