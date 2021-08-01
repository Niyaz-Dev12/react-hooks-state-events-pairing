import React from 'react'

function Comments({name,comment,toggleComment}) {
    const style=toggleComment?"none":"block";
  return (
    <div style={{display: style}}> 
   <p style={{fontWeight : "bold"}}>{name}</p>
    <small>{comment}</small>
    </div>
  )
}

export default Comments
