import React from 'react';
import { useAppSelector } from '../Hooks/useRedux';
import { useDispatch } from 'react-redux';
import { lenguajeChange } from '../Redux/Actions';
import '../Styles/LenguajeButtom/LenguajeButtom.css'

export const LenguajeChange = () => {
    const lenguaje=useAppSelector((state)=>state.lenguaje)
    const dispatch=useDispatch();
    
    const styleSwitch=():'ES'|'EN'=>{
        return lenguaje==='ES'? 'ES':'EN'
    }

  return (
    <div  className={`LenguajeButtom ${styleSwitch()}`} onClick={()=>{dispatch(lenguajeChange(lenguaje))}}>
        <h2>{lenguaje}</h2>
    </div>
  )
}
