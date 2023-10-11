import React from 'react';
import './homepage-style.css'
import {Spotlight} from '../../components/Spotlights'
import {ArticleCard} from '../../components/ArticleCards'
import { QuickInfoCard } from '../../components/QuickInfoCards';

import articles from '../../Data/articles.json';
import quick from '../../Data/quick.json'

export const Homepage = (props) => {
  return (<div className = 'homepage-container'>
  <div className = 'content'>
  <Spotlight />

  <div className = 'news-container  news-responsive'>
    <div className = 'articles-section'>
     {articles.map(({urlToImage, title, description}) => (
      <ArticleCard img={urlToImage} title ={title} description = {description}/>
     ))
     }
    </div>
    <div className='quick-infos-section'>
    {quick.map(({title, description}) => (
      <QuickInfoCard title={title} description = {description } />
    ))}
    </div>
  </div>
  </div>
  </div>
  );
}