import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Contact.css';
import contactBg from '../assets/images/contact-bg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme veya API'ye gönderme
    console.log('Form gönderildi:', formData);
    
    // Form gönderimi başarılı olduğunda gösterim
    setFormSubmitted(true);
    
    // 3 saniye sonra formu sıfırlama ve mesajı kaldırma
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page diagoona-bg" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="diagoona-content">
        <Container>
          <div className="diagoona-content-inner">
            <h1 className="section-title contact-main-title">İletişim</h1>
            
            <div className="contact-intro">
              <p className="lead">
                Sosyal medya hesaplarım üzerinden veya aşağıdaki formu doldurarak benimle iletişime geçebilirsiniz.
              </p>
            </div>
            
            <Row className="g-3">
              <Col lg={6} md={12} className="mb-4">
                <div className="contact-list-container">
                  <h3>Sosyal Medya</h3>
                  <p>
                    Sosyal medya hesaplarımdan bana ulaşabilirsiniz.
                  </p>
                  
                  <ul className="contact-list">
                    <li>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="contact-icon" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/hasanonurbaran" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="contact-icon" /> Github
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="contact-icon" /> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hasanonurbaran21@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> <span style={{ fontSize: '1rem' }}>hasanonurbaran21@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              
              <Col lg={6} md={12}>
                <div className="contact-form-container">
                  {formSubmitted ? (
                    <div className="success-message">
                      <h4>Mesajınız Gönderildi!</h4>
                      <p>Teşekkürler! En kısa sürede size dönüş yapacağım.</p>
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit} className="contact-form">
                      <Form.Group className="mb-2">
                        <Form.Label>Ad Soyad</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-2">
                        <Form.Label>E-posta</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Mesaj</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={4} 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                      
                      <Button type="submit" className="form-button">
                        Gönder
                      </Button>
                    </Form>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact; 