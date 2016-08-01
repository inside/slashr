import React from 'react'

export default ({
  image_url,
  title,
  description,
  onImageClick,
}) => (
  <div
    className="media article"
    style={{clear: 'both'}}
  >
    <div className="bd">
      <img
        className="img"
        src={image_url}
        style={{width: '200px'}}
        onClick={onImageClick}
      />
      <h2>
        {title}
      </h2>
      <p>
        {description}
      </p>
    </div>
  </div>
)
