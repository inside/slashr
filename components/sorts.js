import React from 'react'

export default ({
  label,
  onSortClick,
}) => (
  <div>
    <span>Sort:</span>{' '}
    <a onClick={onSortClick}>{label}</a>
  </div>
)
