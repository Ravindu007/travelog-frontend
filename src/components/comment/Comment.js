import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className='comment'>
      <strong style={{color:"gray"}}>{comment.text}</strong>   :{comment.by}
    </div>
  )
}

export default Comment