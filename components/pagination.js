var React = require('react')

module.exports = function(props) {
  var renderPagesLinks = function(pages) {
    if (!props.pages) {
      return []
    }

    var links = []

    for (var i = 1; i <= props.pages; i++) {
      var style = {
        display: 'inline-block',
        padding: '3px 5px',
        border: '1px solid black'
      }

      if (props.page === i) {
        style = Object.assign({}, style, {textDecoration: 'underline'})
      }

      links.push(
        <a
          onClick={props.onPageClick.bind(null, i)}
          style={style}
          key={i}
        >
          {i}
        </a>
      )
    }

    return links
  }

  return (
    <div>
      <span>
        Total: {props.total}.{' '}
      </span>
      <span>
        Pages:{' '}
        {renderPagesLinks(props.pages)}
      </span>
    </div>
  )
}
