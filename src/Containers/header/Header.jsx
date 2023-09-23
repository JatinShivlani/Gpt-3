import React from 'react'
import './header.css'
import people from '../../Assets/people.png'
import ai from '../../Assets/ai.png'
const Header = () => {
  return (
    <div className='header section-padding' id='home'>
    {/* div for inner content of header */}
      <div className="header-content">
        <h1 className='gradient-text'>Let’s create something extraordinary using OpenAI's GPT-3</h1>
        <p>GPT-3 is a potent AI language model with 175 billion parameters, excelling in text generation, translation, and NLP tasks. It's widely used in chatbots and content generation, revolutionizing AI language capabilities.</p>

        {/* div for input */}
        <div className="header-content-input">
          <input type="text" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>

        {/* div for peoples */}
        <div className="header-content-people">
          <img src={people} alt="people" />
          <p>1.6k+ people requested a visit in last 24 hours</p>
        </div>
      </div>
        {/* div for image ai */}
        <div className="header-image">
          <img src={ai} alt="ai" />
          
        </div>

    </div>
  )
}

export default Header
