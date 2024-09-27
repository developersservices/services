import React, { useState } from 'react'
import './Style.css'
import { TiArrowBackOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { FaArrowsLeftRightToLine } from 'react-icons/fa6'

const Folder = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <>
    <div className="go_back">
      <Link to='/portfolio'><TiArrowBackOutline /></Link>
    </div>
    <div className="open_menu" onClick={toggleMenu}>
      <FaArrowsLeftRightToLine />
    </div>
    <div className="main_show">
      <div className="title_show">
        <h1>Check Work</h1>
      </div>
      <div className="cata_show">
        <div className={`left_show ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#webdesign">Web Design</a></li>
            <li><a href="#logodesign">Logo Design</a></li>
            <li><a href="#webdevelopment">Web Development</a></li>
            <li><a href="#contentwriting">Content Writing</a></li>
            <li><a href="#seobuilding">SEO Building</a></li>
          </ul>
        </div>
      </div>
      <div className="content_right">
        <div className="heading_right" id='webdesign'>
          <h2>Web designs</h2>
        </div>
        <div className="image_right">
          <img
          src="https://cdn.dribbble.com/userupload/16774956/file/original-4a4f3c346280562196dbf68830f1b79c.png?resize=1024x768" alt="Image" />
          <img
          src="https://cdn.dribbble.com/userupload/16782977/file/original-c1ac52d9a3275e5729952f9af59aa565.jpg?resize=1024x768" alt="Image" />
          <img
          src="https://cdn.dribbble.com/userupload/12966097/file/original-862b618b6a4f422541af1923cd44bd03.png?resize=1024x768" alt="Image" />
          <img
          src="https://cdn.dribbble.com/userupload/16772091/file/original-e4526618521b6cc4ede1349829e0d89f.png?resize=1024x768" alt="Image" />
        </div>
        <div className="param_right">
          <p>At A-T, we specialize in helping brands elevate their presence and grow in the digital landscape. Our goal is to provide comprehensive, high-quality web development and design services that empower businesses to reach their full potential. Whether you are a small business, a local shop, or a large enterprise, we tailor our solutions to meet your unique needs.</p>
          <p>We understand that having a strong online presence is crucial for success in today’s competitive market. That’s why we focus on creating user-friendly, highly converting websites that not only look great but also drive engagement and customer action. From eCommerce platforms to professional portfolios, our websites are designed to captivate and convert visitors into loyal customers.</p>
          <p>In addition to web development, we offer expert logo and branding design services. A well-crafted brand identity sets you apart from the competition, and we work closely with our clients to design logos and brand visuals that truly reflect their values and vision.</p>
          <p>Our team is skilled in the latest technologies and design trends, including React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap, ensuring that every project we undertake is modern, responsive, and future-proof. We also prioritize functionality, performance, and seamless user experience to make sure your website not only looks stunning but works flawlessly across all devices.</p>
          <p>We are passionate about helping brands grow and thrive in the digital world, and we are here to guide you every step of the way. Let us help you build an online presence that stands out and drives growth for your business.</p>
        </div>
        <div className="heading_right" id='logodesign'>
          <h2>Logo designs</h2>
        </div>
        <div className="image_right">
          <img
          src="https://cdn.dribbble.com/userupload/10690661/file/original-626a2299d3568add0e4fb6e8fe54dbce.jpg?crop=322x242-8211x6158&resize=320x240&vertical=center" alt="Image" />
          <img
          src="https://cdn.dribbble.com/users/8181009/screenshots/18044150/media/b783936090b6aba6819e47b7ce294911.jpg?resize=768x576&vertical=center" alt="Image" />
          <img
          src="https://cdn.dribbble.com/users/5854058/screenshots/18594887/media/f9b553d5a225f3cfc6d4e941bcb86d80.jpg?resize=768x576&vertical=center" alt="Image" />
          <img
          src="https://cdn.dribbble.com/users/4383346/screenshots/17469325/media/9607998142d60a1b06057d018f881764.jpg?resize=768x576&vertical=center" alt="Image" />
        </div>
        <div className="heading_right" id='webdevelopment'>
          <h2>Web development</h2>
        </div>
        <div className="image_right">
          <img
          src="https://cdn.dribbble.com/userupload/12458014/file/original-f7a1f722f093d0da4079c1c8f7b28289.jpg?resize=1024x768" alt="Image" />
          <img
          src="https://cdn.dribbble.com/userupload/11283003/file/original-1b53c24b3ab04cf0135327b13fcf7e85.png?resize=1024x768" alt="Image" />
          <img
          src="https://cdn.dribbble.com/userupload/14543963/file/original-e8e86317b40e0b7559ec2dc9957d39a8.png?resize=1024x768" alt="Image" />
          <img
          src="https://cdn.dribbble.com/userupload/11538658/file/original-1f6f1b9bb0490ec703dc15e98f110978.jpg?resize=1024x768" alt="Image" />
        </div>
        <div className="param_right" id='contentwriting'>
          <p id='seobuilding'>We also offer freelance content writing services, specializing in creating high-quality, engaging, and SEO-optimized content for various industries. Whether you need blog posts, articles, web copy, or product descriptions, we ensure that our writing meets your specific goals and resonates with your target audience. Our SEO building services cover key categories, including: <strong>Keyword Research:</strong> Identifying the most relevant and high-traffic keywords to enhance search engine rankings. <strong>On-Page SEO:</strong> Optimizing meta tags, headers, and URLs for better visibility and performance. <strong>Content Structure:</strong> Crafting content with proper headings, bullet points, and internal linking for improved readability and SEO value. <strong>User Experience (UX) Optimization:</strong> Ensuring content flows smoothly and is easily accessible on all devices. <strong>SEO Copywriting:</strong> Writing compelling and keyword-optimized text that appeals to both search engines and users. <strong>Technical SEO:</strong> Focusing on improving site speed, mobile-friendliness, and overall website structure. <strong>Link Building:</strong> Developing internal and external linking strategies to boost authority and traffic. With expertise in keyword research and a keen understanding of tone and style, we can tailor content to suit the voice of your brand. Our focus is on delivering clear, concise, and compelling content that drives traffic, improves online visibility, and enhances user engagement.</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default Folder
