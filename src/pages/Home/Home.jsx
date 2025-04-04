import React from 'react'
import { motion } from 'framer-motion'
import './index.css'
import MiKu from '../../assets/3.jpg'

const Home = () => {
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
          <button>
            点击此处进入
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home