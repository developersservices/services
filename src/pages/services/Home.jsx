import React from 'react';
import './Style.css';
import Image from '../../Assets/file.jpg';
import Button from '../../components/button/Button';
import { FcExternal } from 'react-icons/fc';
import Programing from '../../components/programing/Programing';
import { Helmet } from 'react-helmet';
import Blogging from '../../components/blog/Blogging';

const Home = () => {

  return (
    <>
    <div>
      <Helmet>
    <title>Web Development Services</title>
    <meta name="description" content="Expert web application development services in React.js, JavaScript, HTML5, and CSS3 for businesses and brands." />
    <meta name="keywords" content="web development, react.js, javascript, html5, css3, web applications, responsive design, logo design" />
    <meta property="og:title" content="Web Development Services" />
    <meta property="og:description" content="Expert web application development services in React.js, JavaScript, HTML5, and CSS3 for businesses and brands." />
    <meta property="og:image" content={Image} />
    <meta property="og:url" content="https://developersservices.github.io/services/" />
  </Helmet>
    </div>
      <div className="home">
        <div className="bg_home">
          <div className="home_top">
            <div className="profile_border">
              <img src={Image} alt="Profile" className="profile_image" data-aos="zoom-out" />
            </div>
          </div>
          <div className="home_bottom">
            <h1>Building digital Products, brands, and experience.</h1>
          </div>
          <div className="home_btn">
            <Button name="Learn More" icon={<FcExternal className="icon" />} to="/portfolio" />
          </div>
        </div>
      </div>
      <Programing />
      <div className="cards_by_blog">
        <div className="read_blogs">
          <h1>Blog</h1>
        </div>
        <Blogging />
      </div>
    </>
  );
};

export default Home;
