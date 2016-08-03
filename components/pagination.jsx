import React from 'react'
import NavLink from './nav-link'

const renderPagesLinks = (page, pages) => {
  // Creates a sequence from 1 to pages
  let links = Array.from({length: pages}, (v, k) => k + 1)

  return links.map(i => (
    <NavLink
      to={`/page/${i}`}
      key={i}
    >
      {i}
    </NavLink>
  ))
}

export default ({page, pages, total}) => {
  return (
    <div className="pagination">
      <span>
        Total: {total}.{' '}
      </span>
      <span>
        Pages:{' '}
        {pages > 0 && renderPagesLinks(page, pages)}
      </span>
    </div>
  )
}
