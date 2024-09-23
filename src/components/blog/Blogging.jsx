import React from 'react';
import useDate from '../hook/Date';
import Blog from './Blog';
import './Style.css';

const Blogging = () => {
    const { date } = useDate();
    const blogs = [
        {
            id: 1,
            Title: 'Web Design & Development',
            param: 'Working with Appnovation has been an outstanding experience. We always strive to get the most value from our vendors, and Appnovation truly delivers. In our latest project, we received top-quality work from a highly responsive team. Even when we introduced unexpected challenges or requested unique functionality, they quickly adapted and made it happen.',
            date: `${date}`,
        },
        {
            id: 2,
            Title: 'Appnovation: High-Performance Website Design & Development',
            param: 'At Appnovation, we specialize in delivering cutting-edge website design and development services that transform digital experiences. Our websites are built to be high-performing, feature-rich, and secure, offering user-friendly functionality that grows with your business. Whether you`re seeking a visually stunning design or scalable solutions to support your enterprise`s expansion, our expert team ensures that your web presence is optimized for performance, security, and user engagement. Let us help you take your online experience to the next level with custom-tailored solutions.',
            date: `${date}`,
        },
        {
            id: 3,
            Title: 'Expert Web Development & Design Services for Your Business',
            param: 'Our team of experienced website developers provides top-notch web application development and design services to help businesses thrive online. At Appnovation, we offer a full range of web development solutions, including responsive website design, mobile-friendly development, and custom e-commerce platforms. Whether you need a sleek, user-friendly website or a complex intranet, we use the latest web technologies to deliver exceptional results. With 85% of consumers visiting a company`s website before making a purchase, your online presence plays a crucial role in customer decision-making. The appearance, usability, and accessibility of your website can make all the difference in today`s competitive market. Let us help you create a website that stands out and drives results.',
            date: `${date}`,
        },
        {
            id: 4,
            Title: 'Elevate Your Project with Innovative Development Processes',
            param: 'At our core, we prioritize continuous improvement in our development processes. Our dedicated team of developers is committed to ongoing learning, ensuring that your project benefits from the latest innovations and technologies. This commitment allows us to deliver a streamlined, efficient experience tailored to your needs. Trust us to keep your project ahead of the curve and maximize its potential!',
            date: `${date}`,
        },
        {
            id: 5,
            Title: 'Stunning Logo Designs for New Brands',
            param: 'Elevate your brand with our creative logo design services! We specialize in crafting unique and eye-catching logos that capture your brand`s essence. Our talented designers work closely with you to understand your vision, ensuring your new logo stands out in a competitive market. Whether you`re launching a startup or rebranding an existing business, we bring your ideas to life with professionalism and creativity. Let`s create a logo that not only looks great but also tells your brand`s story!',
            date: `${date}`,
        },
    ];

    return (
        <div className="card_inner_blog">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog_card">
                    <Blog
                        Title={blog.Title}
                        param={blog.param}
                        date={blog.date}
                        cardId={blog.id} // Pass cardId to Blog
                    />
                </div>
            ))}
        </div>
    );
};

export default Blogging;
