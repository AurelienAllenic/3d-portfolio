import React,  {useRef, useEffect, useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../Context/LanguageContext.jsx';

const { VITE_TEMPLATE } = import.meta.env;
const { VITE_SERVICE } = import.meta.env;
const { VITE_ACCOUNT } = import.meta.env;

const Contact = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [hideConfirmation, setHideConfirmation] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let timer;
    
        if (showConfirmation && !hideConfirmation) {
          timer = setTimeout(() => {
            setHideConfirmation(true);
          }, 2500); // Durée d'affichage avant de commencer à disparaître
        }
    
        if (hideConfirmation) {
          timer = setTimeout(() => {
            setShowConfirmation(false);
            setHideConfirmation(false);
          }, 500); // Durée de l'animation de disparition
        }
    
        return () => clearTimeout(timer);
      }, [showConfirmation, hideConfirmation]);
    
      const confirmationClass = hideConfirmation ? 'container_confirmation_contact hide-confirmation_contact' : 'container_confirmation_contact';

    const { language } = useLanguage();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(VITE_SERVICE,  VITE_TEMPLATE , form.current, VITE_ACCOUNT )
        .then((res) => {
            setShowConfirmation(true);
            setHideConfirmation(false);
          }, (error) => {
            console.log(error.text); // ou toute autre gestion de l'erreur
            setIsError(true);
          });

        e.target.reset();
        
    };
  return (
    <>
    {showConfirmation && (
      <div className={confirmationClass}>
        <p className='content_confirmation_language'>{isError ? language === 'FR' ? 'Message non envoyé !' : 'Message not sent !' : language === 'FR' ? 'Message envoyé !' : 'Message Sent !'}</p>
      </div>
    )}
    <a className='anchor' id='contact'></a>
    <section className='section-contact'>
        <form ref={form} onSubmit={sendEmail} className='form'>
            <h1 className='main-title-contact'>{language === 'FR' ?  "N'hésitez pas à me contacter" : "Feel free to contact me"}</h1>
            <h2 className='sub-title-contact'>{language === 'FR' ? 'je reviendrai vers vous dans les plus brefs délais' : 'I will come back to you shortly'}</h2>
            <ToastContainer />
            <div className='container_inputs'>
                <input id='name' type="text" name='name' placeholder={language === 'FR' ? 'Votre Nom': 'Your full Name'} required className='input'></input>
                <input id='email' type="email" name='email' placeholder={language === 'FR' ? 'Votre Email': 'Your Email'} required className='input'></input>
            </div>
            <textarea id='textarea' name="message" placeholder={language === 'FR' ? 'Votre message': 'Your message'} rows="7" required className='textarea'/>
            <button type='submit' className='btn-submit'>{language === 'FR' ? 'Envoyer': 'Send'}</button>
        </form>
    </section>
    </>
  )
}

export default Contact
