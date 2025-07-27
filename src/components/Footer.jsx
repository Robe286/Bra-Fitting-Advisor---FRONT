import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import './Footer.css';
function Footer() {
  return (
    <footer className="brabracoa-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Bra Fitting Advisor · Todas las curvas cuentan</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/brabracoa/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Instagram">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/brabracoa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;