import React from 'react'
import './Style.css'
import Profile from '../../Assets/file.jpg';
import Edu from '../../components/education/Edu';
import Github from '../../components/github/Github';

const Portfolio = () => {
  return (
    <>
      <div className="port_main">
        <div className="port_pro_container">
          <div className="port_pro_content">
            <h1>Hey there, I'm <span>Taha</span>!</h1>
            <span>
              <Github />
            </span>
            <div className="port_pro_content_paragraph">
            <p>Welcome to my portfolio! I'm a web application developer, and this site is built using React to showcase my work. Take a look around and explore my projects!</p>
            </div>
          </div>
          <div className="pro_image">
            <div className="pro_image_border">
            <img src={Profile} alt='Profile' className='profile' data-aos="zoom-out" />
            </div>
          </div>
        </div>
      </div>

      <div className="main_container_com">
      <div className="expertise_content">
          <h1>Areas of expertise</h1>
          <div className="expertise_card">
            <span style={{marginBottom: '10px'}}>React Js</span>
            <div>
            <span style={{marginBottom: '10px'}}>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>TailwindCSS</span>
            </div>
          </div>
        </div>
        </div>
          <Edu
           name='Additional experiense' 
           heading='React Js'
           edu='My Self'
           date='March 2023-'
           time='-Sept 2024'
           />
           <Edu 
           heading='JavaScript'
           edu='Academy'
           date='Jun 2023-'
           time='-Sept 2024'
           />
    </>
  )
}

export default Portfolio
