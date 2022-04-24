import React,{CSSProperties} from 'react';
import '../Styles/SocialBar/SocialBar.css';

interface color extends CSSProperties{
    '--clr':String
}
interface individual{
    icon:any,
    color:String,
    link:String
}
interface props{
    data:individual[]
}


export const SocialBar = ({data}:props) => {

  return (
    <ul className='listCont'>
        {
            data.map(e=>{
                return(
                    <li className='listItems' style={{'--clr':e.color} as color}>
                        <a className='socialLink' href={`${e.link}`}><e.icon/></a>
                    </li>
                )
            })
        }
    </ul>
  )
}
