var Article = function(props) {
  return (
    <div
      className="media article"
      style={{clear: 'both'}}
    >
      <a
        className="img"
        onClick={props.handleClick}
      >
        <img src={props.image_url} style={{width: '200px'}}/>
      </a>
      <div className="bd">
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
              onClick={props.handleClick}
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

var Slashr = React.createClass({
  getRandomIntInclusive: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

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

  handleClick: function() {
    console.log('handleClick called')
    //var index = this.getRandomIntInclusive(0, this.articles.length - 1)

    //this.setState({
      //image: this.articles[index]
    //})
  },

  handlePageClick: function(page) {
    this.fetchPage(page)
  },

  getInitialState: function() {
    return {
      articles: [],
      total: null,
      page: null,
      pages: null
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
        <ArticleList
          articles={this.state.articles}
        />
      </div>
    )
  }
})

ReactDOM.render(<Slashr/>, document.getElementById('root'))
