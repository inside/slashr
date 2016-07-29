var React = require('react')

module.exports = function(props) {
  return (
    <div
      className="media article"
      style={{clear: 'both'}}
    >
      <div className="bd">
        <img
          className="img"
          src={props.image_url}
          style={{width: '200px'}}
          onClick={props.onImageClick}
        />
        <h2>
          {props.title}
        </h2>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  )
}
