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
      <div>
        <span>
          Total: {props.total}.{' '}
        </span>
        <span>
          Pages:{' '}
            <a onClick={props.onPageClick.bind(null, 1)}>one</a>,{' '}
            <a onClick={props.onPageClick.bind(null, 2)}>two</a>,{' '}
            <a onClick={props.onPageClick.bind(null, 3)}>three</a>,{' '}
            <a onClick={props.onPageClick.bind(null, 4)}>four</a>
        </span>
      </div>
      <div>
      {
        props.articles.map(function(article) {
          return (
            <Article
              {...article}
              key={article.id}
              onClick={props.handleClick}
            />
          )
        }, this)
      }
      </div>
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
          total: json.total
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
      articles: []
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
        <ArticleList
          articles={this.state.articles}
          total={this.state.total}
          onPageClick={this.handlePageClick}
        />
      </div>
    )
  }
})

ReactDOM.render(<Slashr/>, document.getElementById('root'))
