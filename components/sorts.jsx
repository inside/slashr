import React from 'react'

export default ({onSortClick}) => (
  <div>
    <span>Sort:</span>{' '}
    <a onClick={onSortClick}>alpha</a>
  </div>
)
