import React from 'react'
import { Carrousel } from '../../Components/Carrousel'
import { Nav } from '../../Components/Nav'
import { carrouselData } from '../../resources/CarrouselData';

export const Projects = () => {
  
  return (
    <div className='page'>
        <Nav/>
        
          <Carrousel title={'prueba'} data={carrouselData} />
        
    </div>
  )
}
