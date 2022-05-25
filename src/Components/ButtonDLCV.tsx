import React,{CSSProperties} from 'react';
import '../Styles/ButtonDLCV/ButtonDLCV.css'
import {IoCodeDownloadSharp} from 'react-icons/io5';
import { useCV } from '../Hooks/useCV';


interface color extends CSSProperties{
    '--clr':String
}


export const ButtonDLCV = () => {

  let cv=useCV()
  return (
    <ul className='listContt'>
        <li className='listItemss' style={{'--clr':'#12a9c8'} as color}>
          <a className='socialLinkk' href={cv} target='_blank' download='CVGustavoRiera' rel="noopener noreferrer"><IoCodeDownloadSharp/></a>
        </li>
    </ul>
  )
}