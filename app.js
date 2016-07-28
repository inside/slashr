var Article = function(props) {
  return (
    <div
      className="media article"
      style={{clear: 'both'}}
    >
      <div className="bd">
        <img
          className="img"
          src={props.image_url}
          style={{width: '200px'}}
          onClick={props.onImageClick}
        />
        <h2>
          {props.title}
        </h2>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  )
}

var ArticleList = function(props) {
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

var Pagination = function(props) {
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

var Sorts = function(props) {
  return (
    <div>
      <span>Sort:</span>{' '}
      <a onClick={props.onSortClick}>alpha</a>
    </div>
  )
}

var Slashr = React.createClass({
  fetchPage: function(page) {
    var that = this

    fetch('/slashr/page' + page + '.json').then(function(response) {
      response.json().then(function(json) {
        that.setState({
          articles: json.data,
          total: json.total,
          page: page,
          pages: Math.ceil(json.total / 5)
        })
      })
    })
  },

  handleImageClick: function(e) {
    if (e.target.style.width === '') {
        e.target.style.width = '200px'
    } else {
        e.target.style.width = ''
    }
  },

  handlePageClick: function(page) {
    this.fetchPage(page)
  },

  handleSortClick: function() {
    var articles = Array.from(this.state.articles)

    this.setState({
      sort: this.state.sort === 'alphaaz' ? 'alphaza' : 'alphaaz'
    })

    var order = this.state.sort === 'alphaaz' ? 1 : -1

    articles.sort(function(a, b) {
      return a.title.localeCompare(b.title) * order
    })

    this.setState({
      articles: articles
    })
  },

  getInitialState: function() {
    return {
      articles: [],
      total: null,
      page: null,
      pages: null,
      sort: 'alphaaz'
    }
  },

  componentDidMount: function() {
    this.fetchPage(1)
  },

  render: function() {
    return (
      <div>
        <h1>
          Hello, this is Slashr!
        </h1>
        <Pagination
          total={this.state.total}
          page={this.state.page}
          pages={this.state.pages}
          onPageClick={this.handlePageClick}
        />
        <Sorts
          onSortClick={this.handleSortClick}
        />
        <ArticleList
          articles={this.state.articles}
          onImageClick={this.handleImageClick}
        />
      </div>
    )
  }
})

ReactDOM.render(<Slashr />, document.getElementById('root'))
