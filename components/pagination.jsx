import React from 'react'

const renderPagesLinks = (page, pages, onPageClick) => {
  // Creates a sequence from 1 to pages
  let links = Array.from({length: pages}, (v, k) => k + 1)

  return links.map(i => (
    <a
      onClick={onPageClick(i)}
      key={i}
      className={page === i ? 'active' : null}
    >
      {i}
    </a>
  ))
}

export default ({page, pages, total, onPageClick}) => {
  return (
    <div className="pagination">
      <span>
        Total: {total}.{' '}
      </span>
      <span>
        Pages:{' '}
        {pages > 0 && renderPagesLinks(page, pages, onPageClick)}
      </span>
    </div>
  )
}
