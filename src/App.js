import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Home from './pages/services/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { analytics } from './components/firebase/firebaseConfig';
import { logEvent } from 'firebase/analytics';
import Banner from './components/banner/Banner';
import Folder from './components/designs/designscards/Folder'

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const paths = {
      '/': { page_location: 'https://developersservices.github.io/services/', page_title: 'Home' },
      '/about': { page_location: 'https://developersservices.github.io/about', page_title: 'About Us' },
      '/contact': { page_location: 'https://developersservices.github.io/contact', page_title: 'Contact Us' },
      '/portfolio': { page_location: 'https://developersservices.github.io/portfolio', page_title: 'Portfolio' },
    };

    const currentPath = location.pathname;

    if (paths[currentPath]) {
      logEvent(analytics, 'page_view', {
        page_path: currentPath,
        page_location: paths[currentPath].page_location,
        page_title: paths[currentPath].page_title,
      });
    }
  }, [location]);

  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path='/services' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='designs_showcase' element={<Folder />} />
      </Routes>
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
