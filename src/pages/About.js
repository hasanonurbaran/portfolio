import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';
import aboutBg from '../assets/images/about-bg.jpg';

const About = () => {
  return (
    <div className="about-page diagoona-bg" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="diagoona-content">
        <Container>
          <div className="diagoona-content-inner">
            <h1 className="section-title">Ben Kimim?</h1>
            <div className="about-content">
              <p className="lead">
              Yazılım geliştirmeye olan ilgim, beni Python ve web teknolojileri
üzerine derinlemesine çalışmaya yönlendirdi. Şu anda Balıkesir
üniversitesi bilgisayar mühendisliği 3. sınıf öğrencisi olarak,
yazılım geliştirme konusunda hem teorik hem de pratik
becerilerimi geliştiriyorum. Takım çalışmasına yatkın, problem
çözme odaklı ve yeni teknolojilere hızla adapte olabilen biriyim.
Gelecekte, yazılım geliştirme alanındaki bilgimi artırarak
profesyonel hayata atılmak ve bu alanda kariyerime yön vermek
istiyorum.              </p>
              
              
              
              <Row className="my-4">
                <Col md={6}>
                  <div className="about-info">
                    <h5>Eğitim</h5>
                    <p>Balıkesir Üniversitesi, Bilgisayar Mühendisliği (2022-2026)</p>
                    <p>Anadolu Üniversitesi Açık Öğretim Fakültesi Web Tasarım ve Kodlama (2018-2020)</p>
                  </div>
                </Col>
                <Col md={6}>
                 
                </Col>
              </Row>
              
              <p>
                Çalıştığım her projede en yeni teknolojileri ve endüstri standartlarını takip ederek, yüksek kaliteli, performanslı ve erişilebilir web siteleri oluşturmayı hedefliyorum. Sürekli öğrenmeye ve kendimi geliştirmeye önem veriyorum.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About; 