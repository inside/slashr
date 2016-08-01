import React from 'react'

import Article from './article'

export default ({
  articles,
  onImageClick
}) => (
  <div className="article-list">
    {
      articles.map(article => (
        <Article
          {...article}
          key={article.id}
          onImageClick={onImageClick}
        />
      ))
    }
  </div>
)
