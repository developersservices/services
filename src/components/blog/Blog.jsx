import React, { useState } from 'react';
import './Style.css';
import useDate from '../hook/Date';
import Comments from '../comments/Comments';

const Blog = ({ Title, param, date, cardId }) => {
  const { time, currentDate, wish } = useDate();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(!showMore);

  return (
    <div className="card_blog_main">
      <div className="blog_card">
        <div className="bg_title">
          <h2 className="truncate-title">{Title}</h2>
        </div>
        <div className="bg_paragraph">
          <p className={`truncate-paragraph ${showMore ? 'show-full' : ''}`}>
            {param}
          </p>
          {param.split(' ').length > 20 && (
            <button onClick={handleShowMore} className="see-more">
              {showMore ? 'See Less' : 'Read More'}
            </button>
          )}
        </div>
        <div className="bg_date">
          <span>{date}</span>
        </div>
        <div className="bg_date_time">
          <span>{wish}</span>
          <span>{currentDate}</span>
        </div>
        <div className="comment_bar">
        <Comments cardId={cardId} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
