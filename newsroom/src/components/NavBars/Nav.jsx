import './nav-style.css'
import React from 'react'

 export const Nav = (props) => {
  return (<div className='narvbar-container'>
  <div className='nav-items'> 
      <span>
      <a href='/'>Home</a>
      </span>
      <span>
      <a href='/'>Apple</a>
      </span>
      <span>
      <a href='/'>Tesla</a>
      </span>
      <span>
      <a href='/'>Tech</a>
      </span>
      <span>
      <a href='/'>Politics</a>
      </span>
      <span>
      <a href='/'>Google</a>
      </span>
    </div>
  </div>
  );
 } 
