import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Title/Title.css';

interface Props{
    title:String,
    subtitle:String,
    link:String,
    linkDialog:String
  }

export const Title = ({title,subtitle,link,linkDialog}:Props) => {
  return (
    <div className='titleCont'>
          <h1 className='title'>{title}</h1>
          <p className='sub'>{subtitle}</p>
          <Link className='link' to={`${link}`}>{linkDialog}</Link>
    </div>
  )
}
