import React from 'react'
import { GustavoMonolog } from '../../Components/GustavoMonolog'
import { Nav } from '../../Components/Nav'
import { SocialBar } from '../../Components/SocialBar'
import { useLenguaje } from '../../Hooks/useLenguaje';
import { campos } from '../../resources/CamposSocialBar/CamposStandards';

export const Home = () => {
  const {home}=useLenguaje()
  return (
    <div  className='page' >
      <SocialBar data={campos}/>
      <Nav/>
      <GustavoMonolog title={home.title} subtitle={home.subtitle} text={home.monolog} descarga={home.descarga}/>
    </div>
  )
}
