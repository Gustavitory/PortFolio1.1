import React,{CSSProperties} from 'react';
import '../Styles/Swirl/SwirlStyles.css';
import { Title } from './Title';

interface VarCss extends CSSProperties{
    '--i':Number
}

export const Swirl = ()=> {
  return (
      <div className='Containeer'>
        <div className='loader'>
            <span style={{'--i':1} as VarCss}></span>
            <span style={{'--i':2} as VarCss}></span>
            <span style={{'--i':3} as VarCss}></span>
            <span style={{'--i':4} as VarCss}></span>
            <span style={{'--i':5} as VarCss}></span>
            <span style={{'--i':6} as VarCss}></span>
            <span style={{'--i':7} as VarCss}></span>
            <span style={{'--i':8} as VarCss}></span>
            <span style={{'--i':9} as VarCss}></span>
            <span style={{'--i':10} as VarCss}></span>
        <Title link={'/home'} title={'Gustavo Riera'} subtitle={'Full Stack'} linkDialog={'Enter'} />
        </div>
      </div>
  )
}
