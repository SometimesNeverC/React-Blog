import React from 'react'

import './index.css'

const Loading = () => {
  return (
    <div className='loading'>
      <svg viewBox='0 0 50 50'>
        <circle r='25' cx='25' cy='25'></circle>
      </svg>
      <p>LOADING</p>
    </div>
  )
}

export default Loading