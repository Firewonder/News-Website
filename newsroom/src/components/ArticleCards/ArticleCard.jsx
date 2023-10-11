import React from 'react';
import './articlecard-style.css'
import DarknetImg from '../../assets/darknet.jpg'

import {BsHandThumbsUp} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
export const ArticleCard = ({img, title, description}) => {
  return (<div className= 'article-card-container'>
          <div className = 'article-card'>
        <img src={img} alt=''/>
        <div className='article-title'>{title}</div>
        <div className = 'article-divider'></div>
        <div className='article-description'>{description}</div>
        <div className='data-section'>
          <div className='like-icon vertical-centered'>
          <BsHandThumbsUp />
            <span>165</span> 
          </div>
          <div className='comment-icon vertical-centered'>
            <AiOutlineComment />
            <span>165</span> 
          </div>
          <div className='more'>
            <span>More...</span>
          </div>                    
        </div>
      </div>
  </div>
  );
}