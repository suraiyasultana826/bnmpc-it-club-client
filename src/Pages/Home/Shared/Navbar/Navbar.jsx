import { Link } from 'react-scroll';
import logo from '../../../../assets/Official Logo.png'
const Navbar = () => {
  const navOptions = <>
    <li><a href='/'>Home</a></li>
    <li><Link to='about'   spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >About us</Link></li>
    <li><Link to='footer'  spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >Contact Us </Link></li>
    <li><a href="gallery">Gallery</a></li>
    <li><a href="panels">Panels</a></li>
  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
             </ul>
          </div>
         <img className='w-20 h-20' src={logo} alt="" />
         <p className='font-bold'>BNMPC IT CLUB</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navOptions} 
          </ul>
        </div>
        <div className="navbar-end">
         <a href='/register' className="btn bg-blue-900 text-white">Register</a>
        </div>
      </div>
    );
};

export default Navbar;