import './logo-style.css'
import {useEffect, useState, useRef} from 'react'


import React from 'react'
 export const WebsiteLogo = () => {
  const[isFixed, setFixed] =useState(false);
  const  navRef = useRef();
 
   const scrolFunction = () => {
     console.log(window.scrollY);
     if(window.scrollY>=navRef.current.clientHeight)
     {
     setFixed(true);
   }
   else{
     setFixed(false);
   }
 }
 
   useEffect(()=>{
   window.addEventListener('scroll', scrolFunction)
   },[])
  return (<div className={isFixed ?'logo-new-container' : 'logo-container'} ref ={navRef}>
   THE NEWSROOM
  </div>
  )
 }