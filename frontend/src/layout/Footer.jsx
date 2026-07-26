import { FaFacebook, FaGithub, FaCodepen } from "react-icons/fa";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer">
                <div className="footer-brand">
                    <div>
                        <img src="/icons/idee.png" alt="logo"  />
                    </div>
                    <p>
                    © {currentYear} neildiwa · Made with React, MongoDB & ☕
                    </p>
                </div>
                
                <div className="social-icons">
                    <a href="https://web.facebook.com/jeff.diwa.2024/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://github.com/jdiwa1980"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a href="https://codepen.io/Jeffrey-Diwa"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaCodepen size={30} />
                    </a>
                </div>
                
            </div>
            
        </footer>
      );
}
 
export default Footer;