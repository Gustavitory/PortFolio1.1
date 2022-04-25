import React,{CSSProperties} from 'react';
import '../Styles/ButtonDLCV/ButtonDLCV.css'
import {IoCodeDownloadSharp} from 'react-icons/io5';

interface color extends CSSProperties{
    '--clr':String
}


export const ButtonDLCV = () => {

  return (
    <ul className='listContt'>
        <li className='listItemss' style={{'--clr':'#12a9c8'} as color}>
            <button className='socialLinkk'><IoCodeDownloadSharp/></button>
        </li>
    </ul>
  )
}