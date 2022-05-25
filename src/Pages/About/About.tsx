import React from 'react';
import { CircularMenu } from '../../Components/CircularMenu';
import { Nav } from '../../Components/Nav';
import personal from '../../Images/Personal.png';
import profesional from '../../Images/profesional.png';
import { useLenguaje } from '../../Hooks/useLenguaje';

export const About = () => {
  const {about}=useLenguaje()
  const data=[
    {image:personal,text:about.titles.personal},
    {image:profesional,text:about.titles.proffesional}
  ]

  return (
    <div className='page'>
        <Nav/>
        <CircularMenu data={data}/>
    </div>
  )
}
