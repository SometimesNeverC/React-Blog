import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import MiKu from '../../assets/3.jpg'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='Home_page' id="home">
      <div className='Home_page_content'>
        <div className='Home_page_img_container'>
          <img src={MiKu} alt='Miku-img' className='img'></img>
        </div>
        <div>
          <h1 className='h1'>欢迎来到我的Blog!</h1>
        </div>
        <div className="card">
          <button
            className='Home_button'
            onClick={() => navigate('/article')}>
            点击此处进入
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home