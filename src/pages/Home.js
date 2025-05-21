import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import homeBg from '../assets/images/home-bg.jpg';

const Home = () => {
  return (
    <div className="home-page diagoona-bg" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="diagoona-content">
        <Container>
          <div className="diagoona-content-inner">
            <h1>Kişisel Portfolyoma Hoş Geldiniz</h1>
            <p className="lead">
              Ben Hasan Onur Baran, Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.
              Web teknolojileri, yazılım geliştirme ve sade tasarımlar üzerine çalışıyor; HTML, CSS, JavaScript, React, TypeScript, Python ve MySQL gibi dillerle projeler üretiyorum.
            </p>
            <p>
              Bu portföy, hem öğrendiklerimi paylaşmak hem de birlikte çalışabileceğimiz alanları göstermek için oluşturuldu.
              Çalışmalarıma göz atabilir, iletişime geçerek daha fazlasını keşfedebilirsiniz.
            </p>
            <div className="mt-4 d-flex flex-column flex-md-row">
              <Button as={Link} to="/portfolyo" className="btn-custom me-md-3 mb-3 mb-md-0">
                Portfolyomu Gör
              </Button>
              <Button as={Link} to="/iletisim" variant="outline-light" className="btn-outline">
                İletişime Geç
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home; 