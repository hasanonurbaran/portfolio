import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://github.com/hasanonurbaran" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Portfolio | Tüm hakları saklıdır
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 