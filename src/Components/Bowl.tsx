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
    </SectionCont>
  )
}
