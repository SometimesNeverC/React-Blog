import React from 'react'
import classNames from 'classnames'

const NavLinks = ({ LinkClick, id, text, setToggle, FatherId }) => {

  return (
    <div onClick={prev => setToggle(!prev)}>
      <span
        key={id}
        className={classNames('navigation_tabbar', { active: FatherId === id })}
        onClick={() => LinkClick(id)}
      >
        {text}
      </span>
    </div>
  )
}

export default NavLinks