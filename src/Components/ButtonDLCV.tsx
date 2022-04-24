import React,{CSSProperties} from 'react';
import '../Styles/SocialBar/SocialBar.css';
import {IoCodeDownloadSharp} from 'react-icons/io5';

interface color extends CSSProperties{
    '--clr':String
}


export const ButtonDLCV = () => {

  return (
    <ul className='listCont'>
        <li className='listItems' style={{'--clr':'blue'} as color}>
            <button className='socialLink'><IoCodeDownloadSharp/></button>
        </li>
    </ul>
  )
}