import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Links/LinkType1.css'

interface Props{
    text:String,
    route:String
}

export const LinkType1 = ({text,route}:Props) => {
  return (
    <Link className='LinkType1' id='box' to={`${route}`}>
        {text}
    </Link>
  )
}
