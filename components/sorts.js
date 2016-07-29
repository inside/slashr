var React = require('react')

module.exports = function(props) {
  return (
    <div>
      <span>Sort:</span>{' '}
      <a onClick={props.onSortClick}>alpha</a>
    </div>
  )
}
