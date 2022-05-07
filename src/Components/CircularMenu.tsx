import React,{useState} from 'react'
import { CircularCards } from './CircularCards'

interface content{
  image:any,
  text:String
}

interface props{
  data:content[]
}

export const CircularMenu = ({data}:props) => {
    const [menu,setMenu]=useState<Boolean>(true);
    const [selected,setSelected]=useState<String>('');
  return (
    <div>
    {menu===true?
        data.map((el:any)=>{
          return (
            <CircularCards  image={el.image} text={el.text}/>
          )
          
        }):'chao'
    }
    </div>
  )
}
