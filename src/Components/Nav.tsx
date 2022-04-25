import React, { useState,CSSProperties,useEffect} from 'react';
import '../Styles/Nav/Nav.css';
import { useLenguaje } from '../Hooks/useLenguaje';
import {MdMilitaryTech,MdBuild,MdContactPage,MdOutlinePersonPin} from 'react-icons/md';//tecnologias
import {BiHomeSmile} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { initial } from '../Redux/Reducer';
import { NavManagement } from '../Redux/Actions';

interface varCSS extends CSSProperties{
    '--clr':String
}
export interface ElementsNav{
    Title:String,
    Icon:any,
    route:String,
    color:String
}

export const Nav = () => {   
    const [selected,setSelected]=useState<String>('');//campo seleccionado del nav.

    //Para seleccionar el lenguaje en el que se quiere visualizar
    const textos= useLenguaje();

    //este useEffect es solo para que este seleccionado el correcto en caso de que no se use el link de 
    //react-router-dom y se produzca una recarga de la pagina
    useEffect(()=>{
        setSelected(window.location.pathname.split('/')[1])
    },[])

    const data:ElementsNav[]=[
        {Title:textos.nav.inicio,Icon:BiHomeSmile,route:'/home',color:'#f44336'},
        {Title:textos.nav.sobreMi,Icon:MdOutlinePersonPin,route:'/about',color:'#9231af'},
        {Title:textos.nav.tec,Icon:MdMilitaryTech,route:'/tech',color:'#ffa117'},
        {Title:textos.nav.pro,Icon:MdBuild,route:'/proj',color:'#0fc70f'},
        {Title:textos.nav.con,Icon:MdContactPage,route:'/contact',color:'#2196f3'},
    ]
    const dispatch=useDispatch();

    const navState=useSelector((state:initial)=>state.open);

    const classNavigate=(name:String)=>{
        if (navState) return name;
        else return '';
    }


    const select=(name:String)=>{
        setSelected(name)
    }
    const checkSelect=(name:String)=>{
        return name!==selected?'': 'active'
    }
  return (
        <div className={`navigation ${classNavigate('open')}`}>
            <div className='menuToggle' onClick={()=>dispatch(NavManagement())} ></div>
            <ul className='listcont'>
                {data.map(e=>{
                    return (
                        <li className={`list ${checkSelect(e.route.slice(1))}`} key={`${e.Title}`} style={{'--clr':`${e.color}`}as varCSS}
                        onClick={()=>select(e.route.slice(1))}>
                            <Link to={`${e.route}`} className='link_nav'>
                                <span className='icon'><e.Icon style={{zIndex:1}}/></span>
                                <span className='text'>{e.Title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
  )
}
