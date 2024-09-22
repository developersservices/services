import React from 'react';
import './Style.css';
import Image from '../../Assets/file.jpg';
import Button from '../../components/button/Button';
import { FcExternal } from 'react-icons/fc';
import Programing from '../../components/programing/Programing';
import Blog from '../../components/blog/Blog';
import useDate from '../../components/hook/Date';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { time, date, wish } = useDate();
  const blogs = [
    {
      id: 1,
      Title: '10 Secrets Every Web Developer Should Know Before Starting Their Freelancing Journey',
      param: 'Here is a deep dive into a wealth of knowledge given in Ten things every web developer should know before going full-time freelancing It heavily focuses on aspects such as setting clear and realistic goals, developing a hard-hitting portfolio that will turn heads — all the way to working smartly, getting to your clients who are sure to give you work, being an ace at networking. Polygon photoshop model: Full Bare FrameCurbing halfway in, syllabus layout within, not flat;Although tree-edge sofabytes go byBooting from a whole sector fills up the primary frame.The efficiency that follows hype fits well with tire athleticsshutdown depends on growing new rootsIt kills resplendence ---Natasha Simone Withers May 20 · 1 min read By adhering to these tips, developers shall become competent enough to build a reputation, generate their first set of projects and sustain in the freelancing arena for good.',
      date: `${date} ${time}`,
    },
    {
      id: 2,
      Title: 'Understanding JavaScript ES6 Features',
      param: 'JavaScript ES6 introduced several powerful features like arrow functions, template literals, destructuring, and more. These features made JavaScript code more concise and easier to read...',
      date: `${date} ${time}`,
    },
    {
      id: 3,
      Title: 'What exactly does a freelancer do?',
      param: 'Freelancers are self-employed people who work on a project-by-project basis for clients, rather than being employed by a company full-time. They are often independent contractors who work in creative, skilled, or service sectors Freelancers can work independently, or they can be represented by a company or temporary agency...',
      date: `${date} ${time}`,
    },
  ];

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
        <div className="card_inner_blog">
          {blogs.map((blog) => (
            <Blog key={blog.id} Title={blog.Title} param={blog.param} date={blog.date} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
