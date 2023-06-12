import React,  {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { VITE_TEMPLATE } = import.meta.env;
const { VITE_SERVICE } = import.meta.env;
const { VITE_ACCOUNT } = import.meta.env;
import ContainerMail from "./ContainerMail"

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(VITE_SERVICE,  VITE_TEMPLATE , form.current, VITE_ACCOUNT )

        e.target.reset();
        toast.success('Message envoyé !', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    };
  return (
    <>
    
    <form ref={form} onSubmit={sendEmail} className='form'>
        <h1 className='main-title-contact'>N'hésitez pas à me contacter</h1>
        <h2 className='sub-title-contact'>je reviendrais vers vous dans les plus brefs délais</h2>
        <ToastContainer />
        <div className='container_inputs'>
            <input id='name' type="text" name='name' placeholder='Your full name' required className='input'></input>
            <input id='email' type="email" name='email' placeholder='Your Email' required className='input'></input>
        </div>
        <textarea id='textarea' name="message" placeholder='Your message' rows="7" required className='textarea'/>
        <button type='submit' className='btn-submit'>Send</button>
    </form>
    <div className='position-3D-contact'>
        <ContainerMail />
    </div>
    </>
  )
}

export default Contact
