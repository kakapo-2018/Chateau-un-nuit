import React from 'react'

function Footer (props) {
  const author = 'Nat Rob Zane Emil Lianna'
  const copyright = 2018

  return (
    <div className='footer'>
      <div>&copy; {copyright}</div>
    <div>{author} </div>
    </div>
  )
}
export default Footer