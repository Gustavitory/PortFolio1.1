import { SectionCont } from '../Styles/Bowl/BowlStyles'
import '../Styles/Bowl/BowlStyles.css'
import { useState } from 'react';
import React,{useEffect} from 'react';

export const Bowl = () => {
  const [calm,setCalm]=useState(true)
  useEffect(()=>{
    setTimeout(()=>setCalm(false),500)
  })
  return (
    calm?<h1>loading</h1>:
    <SectionCont>
        <div className='bowl'>
            <div className='liquid'/>
        </div>
        <div className='shadow'/>
        <h1 style={{color:'white'}}>La version Responsive esta acutalmente en desarrollo.</h1>
    </SectionCont>
  )
}
