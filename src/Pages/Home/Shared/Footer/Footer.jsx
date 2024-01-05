import logo from '../../../../assets/Official Logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
    return (
        <div id='footer'>
             <ScrollToTop smooth top='20' color='#00008B' />
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                  <img className='w-20 h-20' src={logo} alt="" />
                    <p>BNMPC IT CLUB<br />Where tech meets future entrepreneurs </p>
                </aside>
                <nav>
                    <header className="footer-title">Sectors</header>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Game Development</a>
                    <a className="link link-hover">Research and Project <br /> Development</a>
                    <a className="link link-hover">Robotics</a>
                    <a className="link link-hover">Graphics</a>
                </nav>
                <nav>
                    <header className="footer-title">Follow Us On</header>
                   <div className='flex gap-5'>
                   <a className=''  href="https://www.facebook.com/bnmpc.itc">
                    <FaFacebook className='w-10 h-8' /></a>
                    <a href='https://www.instagram.com/bnmpcitc/'>< FaInstagram className='w-10 h-8' /></a>
                   </div>
                   <header className="footer-title mt-2">Contact Us</header>
                  <div className='flex gap-2'>
                  <p><MdEmail className='w-10 h-6' /> </p>
                   <p>bnmpc.itc@gmail.com</p>
                  </div>
                   
                </nav>
                

            </footer>
            <aside className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2024 - All right reserved by BNMPC IT CLUB</p>
            </aside>

        </div>
    );
};

export default Footer;