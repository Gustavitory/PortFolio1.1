import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Nav } from './Nav';
import { IconsFloat } from './IconsFloat';
import {IoSendSharp} from 'react-icons/io5';
import '../Styles/contactForm/ContactForm.css';
import swal from 'sweetalert';
import { useLenguaje } from '../Hooks/useLenguaje';
import { useNavigate } from 'react-router-dom';

export const ContactForm = () => {
    const formContact = useRef<HTMLFormElement>(null);
    const navigate=useNavigate()
    const {contact}=useLenguaje()
    console.log(formContact.current)
    const sendEmail = (e:any) => {
        e.preventDefault();
        emailjs.sendForm('service_5hp01zr', 'template_yl8elne', formContact.current?formContact.current:'', '-YmTL4ydaq2cVvbIv')
        .then(() => {
            console.log(formContact.current);          
            formContact.current?.reset();
            swal(contact.title,contact.subtitle,'success').then(()=>navigate('/home',{replace:true}))
        }, () => {
            swal('bad request.','x','error')
        });
        
    };

    return (
        <div className='page'>
            <form className='contactForm' ref={formContact} onSubmit={sendEmail}>
                <input className='normalInput' type="text" name="user_name" placeholder='Name'/>
                <input className='normalInput' type="email" name="user_email" placeholder='Email' />
                <textarea className='normalInput message' name="message" placeholder='Message'/>     
                <IoSendSharp className='send' onClick={(e)=>sendEmail(e)} /> 
            </form>        
            <Nav/>
            <IconsFloat/>
        </div>
    );
};