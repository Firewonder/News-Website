import React from 'react'
// import { ModelDiamond } from 'react-basicons'
import {IoDiamond} from "react-icons/io5"
import './spotlight-style.css'
export const Spotlight = () => {
  return (<div className = 'spotlight-container'>
    <div className='title'>News</div>
    <p className='description'>The most important news in the world</p>
    <div className='divider-container'>
      <div className='divider'></div>
      <div className='icon-container'><IoDiamond size={16}/></div>
      <div className='divider'></div>
    </div>
  </div>
  );
}