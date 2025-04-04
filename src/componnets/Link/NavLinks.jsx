import React from 'react'

const NavLinks = ({href, text,setToggle}) => {
  return (
    <div onClick={prev=>setToggle(!prev)}>
      <a href={`${href}`} className='font-size:20px;line-height:28px;'>
        {text}
      </a>
    </div>
  )
}

export default NavLinks