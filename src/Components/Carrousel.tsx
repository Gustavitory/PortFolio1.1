import React from 'react';
import '../../node_modules/slick-carousel/slick/slick.css'
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLenguaje } from '../Hooks/useLenguaje';
import '../Styles/Carrousel/Carrousel.css'
import {AiFillGithub} from 'react-icons/ai';


export interface compositionCarrousel{
    title:'bodegasDelSur'|'elGramofono'|'harrypotter'|'pokemon'
    image:any
}
interface props{
    data:compositionCarrousel[],
    title:String
}

export const Carrousel = ({title,data}:props) => {
    const {projects}= useLenguaje()
  return (
    <div style={{width:'1000px',position:'relative',height:'500px'}}>
        <Slider adaptiveHeight={false} autoplay={true}>
            {
                data.map(e=>{
                    return (
                        <div style={{position:'relative'}}>
                            <img src={e.image} alt={`${e.title}`} />
                            <div className='carrouselDescription'>
                                <p>{projects[`${e.title}`].description}</p>
                                <a className='link' target={'_blank'} rel='noreferrer' href={`${projects[`${e.title}`].github}`}><AiFillGithub/></a>
                            </div>                            
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}
