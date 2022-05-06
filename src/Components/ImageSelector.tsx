import React,{CSSProperties} from 'react'
import { useState } from 'react';
import '../Styles/ImageSelector/ImageSelector.css'
import { useLenguaje } from '../Hooks/useLenguaje';

interface image{
    image:any,
    description:String,
    name:String,
    color:String
}
interface color extends CSSProperties{
  '--clr':String
}
interface props {
    data:image[],
    title:String
}

export const ImageSelector = ({data,title}:props) => {
  const [nameSelected,setNameSelected]=useState<String>(data[0].name);

  const isSelected=(name:String)=>{
    return name===nameSelected?'focusdefined':null;
  }
  const isFocus=(element:image)=>element.name===nameSelected
  const Focus=()=>{
    const index=data.findIndex(isFocus);
    return data[index]
  }
  let Focused=Focus()

  const onClick=(name:String)=>{
    setNameSelected(name)
  }

  const {tech}=useLenguaje();

  return (
    <div className='page interactivePage' style={{'--clr':Focused.color} as color}>
      <h1 className='titleTech'>{tech.title}</h1>
      <div className='selected-big-cont'>
        <img className='selected-big-img' src={Focused.image} alt={`${Focused.name}`} />
        <div className='monolog techdialog'>
          <h1 className='title'>{Focused.name}:</h1>
          <p className='text'>{Focused.description}</p>
        </div>
      </div>
      <div className='logos-bar'>
        {data.map(e=>{
          return (
            <img src={e.image} alt={`${e.name}`} className={`logo-mini ${isSelected(e.name)} ${e.name}`} 
            onClick={()=>onClick(e.name)} style={{'--clr':e.color} as color}/>
          )
        })}
      </div>
    </div>
  )
}
