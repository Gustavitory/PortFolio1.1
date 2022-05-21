import React,{CSSProperties} from 'react'
import reactIcon from '../Images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png' 
import jsIcon from '../Images/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b6dbeb4be0349.4316196815339189007783.png' 
import tsIcon from '../Images/typescript.png' 
import nodeIcon from '../Images/node.png' 

interface delay extends CSSProperties{
    '--d':Number
  }
  const icons=[
    {icon:reactIcon,delay:1,name:'react'},
    {icon:jsIcon,delay:2,name:'js'},
    {icon:tsIcon,delay:3,name:'ts'},
    {icon:nodeIcon,delay:4,name:'node'}    
  ]
export const IconsFloat = () => {


  return (
    <>
    {
          icons.map(e=>{
            return(
              <img  className={`icons ${e.name}`} src={e.icon} alt='icon' style={{'--d':e.delay} as delay} />
            )
          })
        }
    </>
  )
}
