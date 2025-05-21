import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/Skills.css';
import skillsBg from '../assets/images/skills-bg.jpg';

const Skills = () => {
  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'React', 'TypeScript', 'MySQL'
  ];

  return (
    <div className="skills-page diagoona-bg" style={{ backgroundImage: `url(${skillsBg})` }}>
      <div className="diagoona-content">
        <Container>
          <div className="diagoona-content-inner">
            <h1 className="section-title">Neler Yapabilirim?</h1>
            
            <div className="skills-intro">
              <p className="lead">
                HTML, CSS, JavaScript, React ve TypeScript ile modern ve sade kullanıcı arayüzleri geliştirebilirim. MySQL ve Python bilgimle veriye dayalı uygulamalar tasarlayabilir, frontend ve backend arasında dengeli çözümler sunabilirim. Teknolojiyi yalın bir bakış açısıyla kullanarak, işlevsel ve estetik projeler üretmeyi seviyorum.
              </p>
            </div>
            
            <div className="skills-container">
              <div className="technologies-grid">
                {technologies.map((tech, index) => (
                  <div className="tech-item" key={index}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skills-extra">
              <h3>Çalışma Yaklaşımım</h3>
              <p>
                İşlerimi sade, odaklı ve verimli şekilde yürütmeye özen gösteririm. Gereksiz karmaşadan uzak durur, net hedeflerle çalışırım. Teknolojiyi bilinçli kullanır, öğrenmeye ve gelişmeye her zaman açık kalırım.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Skills; 