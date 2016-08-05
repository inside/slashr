import React from 'react'

import Article from './article'

export default ({
  articles,
}) => (
  <div className="article-list">
    {
      articles.map(article => (
        <Article
          {...article}
          key={article.id}
        />
      ))
    }
  </div>
)
