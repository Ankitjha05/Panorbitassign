import React from 'react'

const Toppart = (props) => {
  return (
    <div id='toppart'>
        <span className='toppart_span'>Profile</span>
        <div>
        <img className='toppart_image' src={props.image} alt=""/><span>{props.name}</span>
        </div>
    </div>
  )
}

export default Toppart
