import React,{useState} from 'react'
import { CircularCards } from './CircularCards'
import '../Styles/circularMenu/CircularMenuCont.css'
import { useLenguaje } from '../Hooks/useLenguaje';
import { AboutContent } from './AboutContent';

interface content{
  image:any,
  text:String
}

interface props{
  data:content[]
}

interface texts{
  title:String,
    content:String,
    subtitle:String
}

export const CircularMenu = ({data}:props) => {
    const [selected,setSelected]=useState<String>('');
    const [text,setText]=useState<texts[]>([]);

    const {about}=useLenguaje()
    const {personal,proffesional}=about


    const select=async (name:String)=>{
        if(name==='Personal')setText(personal);
        else setText(proffesional);
        setSelected(name)
    }
    const reset=()=>{
      setSelected('')
    }
  return (
    <div className='CircularMenuCont'>
    {selected===''?
        data.map((el:any)=>{
          return (
            <CircularCards  image={el.image} text={el.text} action={select}/>
          )
          
        }):<AboutContent data={text} title={'Gustavo Riera'} reset={reset}/>
    }
    </div>
  )
}
