var React = require('react')

var Article = require('./article')

module.exports = function(props) {
  return (
    <div className="article-list">
      {
        props.articles.map(function(article) {
          return (
            <Article
              {...article}
              key={article.id}
              onImageClick={props.onImageClick}
            />
          )
        })
      }
    </div>
  )
}
