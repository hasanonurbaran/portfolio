import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  // Eklenti çakışmalarını önleme
  useEffect(() => {
    const patchExternalLibraries = () => {
      const originalAddEventListener = document.addEventListener;
      document.addEventListener = function(type, listener, options) {
        if (typeof listener === 'function' && !type.startsWith('extension-')) {
          return originalAddEventListener.call(this, type, listener, options);
        }
        return undefined;
      };
    };
    
    if (process.env.NODE_ENV === 'development') {
      patchExternalLibraries();
    }
    
    return () => {
      if (process.env.NODE_ENV === 'development') {
        document.addEventListener = window.originalAddEventListener;
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimda" element={<About />} />
            <Route path="/yetenekler" element={<Skills />} />
            <Route path="/portfolyo" element={<Portfolio />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
