import React from 'react';
import './Style.css';
import Image from '../../Assets/file.jpg';
import Button from '../../components/button/Button';
import { FcExternal } from 'react-icons/fc';
import Programing from '../../components/programing/Programing';
import Blog from '../../components/blog/Blog';
import useDate from '../../components/hook/Date';

const Home = () => {
  const { time, date, wish } = useDate();
  const blogs = [
    {
      id: 1,
      Title: 'More about Web Application',
      param: 'Web applications are software programs that run in a web browser and are accessed over the internet. These applications are typically built using web technologies such as HTML, CSS, and JavaScript...',
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
