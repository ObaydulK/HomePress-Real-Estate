import { FaFacebook,FaInstagram,FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="bg-base-200 ">
                <div className="grid grid-flow-col items-center">
                    <div className="text-3xl">
                        <img className="w-fit" src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2021/03/white-logo.png" alt="" />
                    </div>
                    <div className="text-4xl flex gap-5 justify-end">
                          <a  href="http://facebook.com"></a><FaFacebook /> 
                          <a  href="http://facebook.com"></a><FaTwitter /> 
                          <a  href="http://facebook.com"></a><FaYoutube/> 
                          <a  href="http://facebook.com"></a><FaInstagram /> 
                    </div>
                </div>
                <div className="footer p-10  text-base-content border-t-2">
                    <nav>
                    <header className="footer-title">About</header>
                        <p>Fusce quis tellus nulla. Donec sodales mauris <br /> eget pellentesque hendrerit. Donec molestie <br /> non urna sit amet aliquet. Curabitur sit amet <br /> est nec nulla varius fermentum. </p>
                    </nav>
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
                </div>
                <aside className="text-center pb-10">
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;