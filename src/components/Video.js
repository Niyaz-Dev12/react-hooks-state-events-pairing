import React from 'react'

function Video({data: {title,embedUrl}}) {
  return (
    <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
  )
}

export default Video
