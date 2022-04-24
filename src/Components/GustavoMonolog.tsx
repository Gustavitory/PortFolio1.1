import React from 'react';
import '../Styles/GustavoMonolog/GustavoMonolog.css';
import gustavo from '../Images/pngGustavo.png';
import { ButtonDLCV } from './ButtonDLCV';

interface props {
  title:String,
  text:String,
  subtitle:String,
  descarga:String
}

export const GustavoMonolog = ({title,text,subtitle,descarga}:props) => {
  return (
    <div className='GMonoD'>
        <img className='foto' src={gustavo} alt="yo" />
        <div className='monolog'>
          <h1 className='title'>{title}</h1>
          <h2 className='subtitle'>{subtitle}</h2>
          <p  className='text'>{text}</p>
          <button className='buttonCV'>{descarga}</button>
          <ButtonDLCV/>
        </div>
    </div>
  )
}
