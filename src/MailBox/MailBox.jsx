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
        <div id="mailBox">
        <SectionTitle heading="Mail Box"></SectionTitle>
        <div className="md:flex justify-items-center items-center justify-around">
          <Lottie animationData={email} className=""></Lottie>
          <form
            className="px-10 mb-10 mt-10 items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <inputr
            
              type="text"
              name="user_name"
              className="input input-bordered w-full max-w-xs my-1"
              placeholder="Name"
            />
            <input
              type="email"
              className="input input-bordered w-full max-w-xs my-1"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              name="message"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs my-1 px-4 pt-2"
              cols="20"
            />
            <div className="w-full">
              <input
                type="submit"
                className="btn bg-blue-800 text-white"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default MailBox;