import React, { useState } from 'react'
import './index.css'
import { Enums } from '../../Enums'
import NavLinks from '../Link/NavLinks'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';
import MiKu from '../../assets/3.jpg'

const Portait = () => {
  const [toggle, setToggle] = useState(false);

  const MenuClick = () => {

  }

  return (
    <div className='portrait'>
      <div className='portrait_table'>
        <div className='head-container'>
          <div className='header'>C</div>
          <p>Chen <span>HY</span></p>
        </div>

        <div className='content' onClick={() => {

        }}>
          {Enums.map(item => {
            return (
              <div key={item.id}>
                <a href=''>{item.href}</a>
              </div>
            )
          })}
        </div>
        <HiMenuAlt3 className='toggle' onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className='portrait_nav'>
          <div className='portrait_nav_container'>
            {Enums.map((item) => {
              return <NavLinks key={item.id} {...item}
                setToggle={setToggle} />
            })}
          </div>
          <HiX className='Hix_icon' onClick={() => setToggle(!toggle)}></HiX>
        </motion.div>
      )}

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
    </div>
  )
}

export default Portait