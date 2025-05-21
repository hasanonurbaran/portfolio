import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Hava Durumu Uygulaması',
      category: 'Web Geliştirme',
      image: '/images/portfolio/project1.jpg',
      description: 'React ve Node.js kullanarak geliştirdiğim tam özellikli e-ticaret platformu. Redux ile state yönetimi, MongoDB veritabanı ve ödeme entegrasyonu içerir.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      githubLink: 'https://github.com/hasanonurbaran/havadurumu'
    },
    {
      id: 2,
      title: 'Döviz Uygulaması',
      category: 'Web Geliştirme',
      image: '/images/portfolio/project2.jpg',
      description: 'Kullanıcıların kayıt olabileceği, gönderi paylaşabileceği ve etkileşimde bulunabileceği bir sosyal medya uygulaması. Real-time mesajlaşma özelliği ile donatılmıştır.',
      technologies: ['React', 'Firebase', 'Socket.io', 'Sass'],
      githubLink: 'https://github.com/hasanonurbaran/Currency-Exchange-Tracker'
    },
    {
      id: 3,
      title: 'Blog Sitesi',
      category: 'Web Geliştirme',
      image: '/images/portfolio/project3.jpg',
      description: 'Kişisel portfolyo sitesi. Modern tasarım, responsive layout ve animasyonlar içerir.',
      technologies: ['React', 'Bootstrap', 'Gsap', 'Netlify'],
      githubLink: 'https://github.com/hasanonurbaran/blogsite'
    },
    {
      id: 4,
      title: 'Portfolyo Sitesi',
      category: 'Web Geliştirme',
      image: '/images/portfolio/project4.jpg',
      description: 'OpenWeatherMap API kullanarak geliştirilmiş hava durumu uygulaması. Konum tabanlı tahminler ve 5 günlük öngörüler sunar.',
      technologies: ['JavaScript', 'HTML/CSS', 'API Integration'],
      githubLink: 'https://github.com/'
    },
    {
      id: 5,
      title: 'Yakında Eklenecek',
      category: '',
      image: '/images/portfolio/project5.jpg',
      description: 'Drag and drop özelliği ile görevleri yönetmeyi sağlayan web uygulaması. Kanban tarzı arayüz ve kullanıcı dostu tasarım.',
      technologies: ['Vue.js', 'Vuex', 'Firebase', 'Vuetify'],
      githubLink: 'https://github.com/'
    },
    {
      id: 6,
      title: 'Yakında Eklenecek',
      category: '',
      image: '/images/portfolio/project6.jpg',
      description: 'Kullanıcıların kayıt olabileceği, makale yazabileceği ve yorum yapabileceği tam özellikli bir blog platformu.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/'
    }
  ];

  return (
    <div className="portfolio-page diagoona-bg" style={{ backgroundImage: `url('/images/portfolio/portfolio-bg.jpg')` }}>
      <div className="diagoona-content">
        <Container>
          <div className="diagoona-content-inner">
            <h1 className="section-title portfolio-main-title">Portfolyo</h1>
            
            <div className="portfolio-intro">
              <p className="lead">
                Geliştirdiğim bazı projeler ve çalışmalar. Her bir proje, farklı teknolojiler ve zorluklar içeriyor.
              </p>
            </div>
            
            <Row className="portfolio-grid g-3">
              {projects.map((project) => (
                <Col lg={4} md={6} className="mb-4" key={project.id}>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="portfolio-link"
                  >
                    <Card className="portfolio-card">
                      <div className="portfolio-thumbnail">
                        <Card.Img variant="top" src={project.image} alt={project.title} />
                        <div className="portfolio-overlay">
                          <div className="github-link-text">GitHub'da İncele</div>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text className="project-category">{project.category}</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Portfolio; 