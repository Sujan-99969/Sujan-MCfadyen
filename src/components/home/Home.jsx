import React from 'react'
import "./Home.css"
import RightSection from './rightsection/RightSection';
import LeftSection from './leftsection/LeftSection';
import MainContent from './maincontent/MainContent';
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <div class="wrapper">
  <div><LeftSection /></div>
  <div><MainContent /></div>
  <div><RightSection /></div>




  
</div>
  )
}

export default Home