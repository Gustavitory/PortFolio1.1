import React,{useState,useEffect} from 'react'
import { Bowl } from '../../Components/Bowl';
import { Swirl } from '../../Components/Swirl';
import '../../Styles/Bowl/BowlStyles.css';


export const Landing = () => {
  const [Loading,setLoading]=useState<Boolean>(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },100)
  }, [])
  
  return (
    <>
      {Loading?<Bowl/>:<Swirl/>}
    </>
  )
}
