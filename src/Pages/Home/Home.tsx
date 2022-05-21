import React from 'react'
import { GustavoMonolog } from '../../Components/GustavoMonolog'
import { Nav } from '../../Components/Nav'
import { useLenguaje } from '../../Hooks/useLenguaje';

export const Home = () => {
  const {home}=useLenguaje()
  return (
    <div  className='page' >
      <Nav/>
      <GustavoMonolog title={home.title} subtitle={home.subtitle} text={home.monolog} descarga={home.descarga}/>
    </div>
  )
}
