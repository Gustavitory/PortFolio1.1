import React,{CSSProperties} from 'react';
import '../Styles/GustavoMonolog/GustavoMonolog.css';
import gustavo from '../Images/pngGustavo.png';
import { ButtonDLCV } from './ButtonDLCV';
import reactIcon from '../Images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png' 
import jsIcon from '../Images/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b6dbeb4be0349.4316196815339189007783.png' 
import tsIcon from '../Images/typescript.png' 
import nodeIcon from '../Images/node.png' 

interface props {
  title:String,
  text:String,
  subtitle:String,
  descarga:String
}
interface delay extends CSSProperties{
  '--d':Number
}
export const GustavoMonolog = ({title,text,subtitle,descarga}:props) => {

  const icons=[
    {icon:reactIcon,delay:1,name:'react'},
    {icon:jsIcon,delay:2,name:'js'},
    {icon:tsIcon,delay:3,name:'ts'},
    {icon:nodeIcon,delay:4,name:'node'}    
  ]
  return (
    <div className='GMonoD'>
        <img className='foto' src={gustavo} alt="yo" />
        <div className='monolog'>
          <h1 className='title titleMono'>{title}</h1>
          <h2 className='subtitle'>{subtitle}</h2>
          <p  className='text'>{text}</p>
          <ButtonDLCV/>
        </div>
        {
          icons.map(e=>{
            return(
              <img  className={`icons ${e.name}`} src={e.icon} alt='icon' style={{'--d':e.delay} as delay} />
            )
          })
        }
    </div>
  )
}
