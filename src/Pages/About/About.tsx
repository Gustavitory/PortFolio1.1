import React from 'react';
import { CircularMenu } from '../../Components/CircularMenu';
import { Nav } from '../../Components/Nav';
import personal from '../../Images/Personal.png';
import profesional from '../../Images/profesional.png';

export const About = () => {
  const data=[
    {image:personal,text:'Personal'},
    {image:profesional,text:'Profesional'}
  ]

  return (
    <div className='page'>
        <Nav/>
        <CircularMenu data={data}/>
    </div>
  )
}
