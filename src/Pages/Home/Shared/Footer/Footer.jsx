import logo from '../../../../assets/Official Logo.png'
const Footer = () => {
    return (
        <div id='footer'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                  <img className='w-20 h-20' src={logo} alt="" />
                    <p>BNMPC IT CLUB<br />Providing reliable tech </p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <aside className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2023 - All right reserved by BNMPC IT CLUB</p>
            </aside>

        </div>
    );
};

export default Footer;