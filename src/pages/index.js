import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
    <div className='Hero'>
      <div className='HeroGroup'>
      <h1>Learn to <br></br>design and code React apps</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <Link to="/page-2/">Watch the video</Link>

<div className='logos'><img src={require('../images/logo-sketch.png') } width="50"/>
              <img src={require('../images/logo-figma.png') } width="50"/>
              <img src={require('../images/logo-studio.png') } width="50"/>
              <img src={require('../images/logo-framer.png') } width="50"/>
              <img src={require('../images/logo-react.png') } width="50"/>
              <img src={require('../images/logo-swift.png') } width="50"/>
</div>

    <svg width="100%" height="172"  fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  fill="white" >
  <animate repeatCount="indefinite" fill='freeze' attributeName='d'  dur="10s" 
  values="
  M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

  M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

  M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

  M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"/></path>
</svg>
      </div>
       </div>
            <div className='Cards'>
              <h2>11 courses, more coming</h2>
              <div className='CardGroup'>
                  <Card 
                    title ="React for Designers"
                    text="12 sections"
                    image={require('../images/wallpaper.jpg')}/>
                    <Card 
                    title ="angular for Designers"
                    text="10 sections"
                    image={require('../images/wallpaper2.jpg')}/>
                    <Card 
                    title ="nextjs for Designers"
                    text="2 sections"
                    image={require('../images/wallpaper3.jpg')}/>
                    <Card 
                    title ="vue for Designers"
                    text="8 sections"
                    image={require('../images/wallpaper4.jpg')}/>
                    <Card 
                    title ="React for Designers"
                    text="12 sections"
                    image={require('../images/wallpaper.jpg')}/>
                    <Card 
                    title ="nextjs for Designers"
                    text="2 sections"
                    image={require('../images/wallpaper3.jpg')}/>
                    </div>
            </div>
  </div>
)

export default IndexPage 
