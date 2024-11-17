import React from 'react';
import './main.css'
import { assets } from '../../assets/assets'

const main = () => {
  return(
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className='main-container'>
        <div className='greet'>
          <p><span>Olá, Dev.</span></p>
          <p>Oque eu posso ajudar você hoje?</p>
        </div>
        <div className='cards'>
          <div className="card">
            <p>Sugira um lugar bonito para ver em uma próxima viagem</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve tge readability of the following</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responsaves your privacy Gemini apps.
          </p>
        </div>
      </div>
    </div>
  )
  
  
  
}
export default main


