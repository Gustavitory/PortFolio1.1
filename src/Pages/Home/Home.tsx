import React from 'react'
import { GustavoMonolog } from '../../Components/GustavoMonolog'
import { Nav } from '../../Components/Nav'
import { SocialBar } from '../../Components/SocialBar'
import { useLenguaje } from '../../Hooks/useLenguaje';
import { AiOutlineLinkedin,AiFillGithub,AiOutlineWhatsApp } from 'react-icons/ai';

export const Home = () => {
  const {home}=useLenguaje()
  const campos=[
    {icon:AiOutlineLinkedin,color:'#00d9f2',link:'#'},
    {icon:AiFillGithub,color:'#a472ac',link:'#'},
    {icon:AiOutlineWhatsApp,color:'#08b11e',link:'#'}
]
  return (
    <div style={{backgroundColor:'#001113',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <SocialBar data={campos}/>
      <Nav/>
      <GustavoMonolog title={home.title} subtitle={home.subtitle} text={home.monolog} descarga={home.descarga}/>
    </div>
  )
}
