import React from 'react'
import { SectionCont } from '../Styles/Bowl/BowlStyles'
import '../Styles/Bowl/BowlStyles.css'

export const Bowl = () => {
  return (
    <SectionCont>
        <div className='bowl'>
            <div className='liquid'/>
        </div>
        <div className='shadow'/>
        <h1 style={{color:'white'}}>La version Responsive esta acutalmente en desarrollo.</h1>
    </SectionCont>
  )
}
