import React from 'react'
import {connect} from 'react-redux'

const Article = ({
  id,
  image_url,
  title,
  description,
  onImageClick,
  zooms,
}) => (
  <div
    className="media article"
    style={{clear: 'both'}}
  >
    <div className="bd">
      <img
        className="img"
        src={image_url}
        style={zooms[id] ? {} : {width: '200px'}}
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

const mapStateToProps = (state) => {
  return {
    zooms: state.zoomState.zooms
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onImageClick: () => {
      dispatch({
        type: 'ZOOM_TOGGLE',
        id: ownProps.id,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
