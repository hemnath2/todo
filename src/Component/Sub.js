import React from 'react'

export default function Sub(props) {
  return (
    <div className='com'>
      <div className='hello'>
      <input type='checkbox' onChange={props.del} value={props.val2} />
      <span>{props.x}</span>
      </div>
    </div>
  )
}
