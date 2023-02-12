import React from 'react'
import Bottompart from './Rightsection/Bottompart'
import Toppart from './Rightsection/Toppart'

const Rightsec = (props) => {
    let ele = props.elements;
  return (
    <div className='rightsection'>
      <Toppart name={ele.name} image={ele.profilepicture}/>
      <Bottompart elements={ele}/>
    </div>
  )
}

export default Rightsec
