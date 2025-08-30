import React from 'react';
import './Contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact=()=>{
    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                <article className='contact__option'>
                <MdOutlineMailOutline className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>vijaysharmagpj65@gmail.com</h5>
                    <a href='mailto:vijaysharmagpj65@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
                </article>

                <article className='contact__option'>
                <FaWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+91 8271779635</h5>
                    <a href='https://api.whatsapp.com/send?phone+918271779635'target='_blank' rel="noreferrer">Send a message</a>
                </article>

                </div>
                {/* end of the contact option  */}
                
                <form>
                <input type='text' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;