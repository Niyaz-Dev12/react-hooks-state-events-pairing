import React from 'react'

function VideoDetails({data: {title,views,createdAt,upvotes,downvotes},onClickLikes,onClickDislikes,onClickComment,toggleComment}) {
  return (
    <>
      <h1>{title}</h1>
      <small>{views + " Views"} | {"Uploaded " + createdAt  }</small><br/><br/>
      <button onClick={onClickLikes}>{upvotes} 👍</button>
      <button onClick={onClickDislikes}>{downvotes} 👎</button><br/><br/>
      <button onClick={onClickComment}>{toggleComment?"Show":"Hide"} Comments</button>
    </>
  )
}

export default VideoDetails
