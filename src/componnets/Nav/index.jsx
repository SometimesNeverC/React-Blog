import React, { useState } from 'react'
import './index.css'
import { Tabs } from '../../enums'
import NavLinks from '../../componnets/Link/NavLinks'
import { useNavigate } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';
import classNames from 'classnames'

const Portait = () => {
  const [toggle, setToggle] = useState(false);
  const [Id, setId] = useState(1);
  const navigate = useNavigate();

  const MenuClick = (id) => {
    console.log(id);
    setId(id)
    if (id != undefined) {
      const navigateTo = Tabs.filter(item => item.id === id)
      const { link } = navigateTo[0];
      navigate(link)
    }
  }

  return (
    <div className='navigation'>
      <div className='navigation_table'>
        <div className='head-container'>
          <div className='header'>C</div>
          <p>Chen <span>HY</span></p>
        </div>

        <div className='content' onClick={() => {

        }}>
          {Tabs.map(item => {
            return (
              <span
                key={item.id}
                className={classNames('navigation_tabbar', { active: Id === item.id })}
                onClick={() => MenuClick(item.id)}
              >
                {item.text}
              </span>
            )
          })}
        </div>
        <HiMenuAlt3 className='toggle' onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className='navigation_nav'>
          <div className='navigation_nav_container'>
            {Tabs.map((item) => {
              return <NavLinks
                key={item.id}
                {...item}
                FatherId = {Id}
                LinkClick={MenuClick}
                setToggle={setToggle} />
            })}
          </div>
          <HiX className='Hix_icon' onClick={() => setToggle(!toggle)}></HiX>
        </motion.div>
      )}
    </div>
  )
}

export default Portait