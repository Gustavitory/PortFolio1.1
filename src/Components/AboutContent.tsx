import React from 'react'
import { IconsFloat } from './IconsFloat'
import {IoCaretBackOutline} from 'react-icons/io5'

interface content {
    title:String,
    content:String,
    subtitle:String,
    link?:String,
    contact?:String,
    supervisor?:String
}
interface props{
    data:content[],
    title:String,
    reset:()=>void
}

export const AboutContent = ({data,title,reset}:props) => {
  return (
    <>
      <div className='titleCont monolog' style={{width:'70%'}}>
      <h1 className='title titleMono'>{title}</h1>
      {
        data.map(e=>{
          return (
            <div>
              <h1>{e.title}</h1>
              <h3>{e.subtitle}</h3>
              {e.link?
              <>
                <h3>{e.link}</h3>
                <h3 className='title'>contact: {e.supervisor} (supervisor) ( {e.contact})</h3>
              </>
                :null}
              <p>{e.content}</p>
            </div>
          )
        })
      }
      <IoCaretBackOutline onClick={()=>reset()} className='BackButtom'/>
      </div>
      <IconsFloat/>
    </>
  )
}
