import React from 'react';
import '../../node_modules/slick-carousel/slick/slick.css'
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface composition{
    title:String,
    image:any
}
interface props{
    data:composition[],
    title:String
}

export const Carrousel = ({title,data}:props) => {
  return (
    <div style={{width:'1000px',position:'relative',height:'500px'}}>
        <Slider adaptiveHeight={false} autoplay={true}>
            {
                data.map(e=>{
                    return (
                        <div>
                            <img src={e.image} alt={`${e.title}`} />
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}
