import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import email from '../email.json'
import Lottie from 'lottie-react'
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import toast from 'react-hot-toast';

const MailBox = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x6dn67a', 'template_vghmb09', form.current, 'QCHTD3nTA189eVnho')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
           
            toast.success('Message sent successfully!')
            
           
           
    };
   
    
    return (
      <div id='mailBox'>
        <SectionTitle heading="Mail Box"></SectionTitle>
          <div className='md:flex justify-items-center items-center justify-around'>
          <div>
                <Lottie animationData={email} className='w-1/2 ml-14'></Lottie>
            </div>
            <form className='px-10 mb-10' ref={form} onSubmit={sendEmail}>
                <label>Name: </label>
                <input type="text" name="user_name" className="input input-bordered w-full max-w-xs" placeholder='Name' /> <br />
                <label>Email:  </label>
                <input type="email" className="input input-bordered w-full max-w-xs mt-2" placeholder='Email' name="user_email" /> <br />

                <label>Message:</label>
                <textarea name="message" placeholder='Type here' className="input  input-bordered input-lg w-full max-w-xs mt-2" />
                <br />
                <input type="submit" className='btn bg-blue-800 text-white' value="Send" />
            </form>

            

        </div>
      </div>
    );
};

export default MailBox;