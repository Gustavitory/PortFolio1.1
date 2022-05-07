import React from 'react';
import { CircularMenu } from '../../Components/CircularMenu';
import { Nav } from '../../Components/Nav';
import { SocialBar } from '../../Components/SocialBar';
import personal from '../../Images/Personal.png';
import profesional from '../../Images/profesional.png';
import {campos} from '../../resources/CamposSocialBar/CamposStandards'

export const About = () => {
  const data=[
    {image:personal,text:'Personal'},
    {image:profesional,text:'Profesional'}
  ]

  return (
    <div className='page'>
        <Nav/>
        <SocialBar data={campos}/>
        <CircularMenu data={data}/>
    </div>
  )
}
