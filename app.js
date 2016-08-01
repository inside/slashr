var React = require('react')
var ReactDOM = require('react-dom')

var ArticleList = require('./components/article-list').default
var Pagination = require('./components/pagination').default
var Sorts = require('./components/sorts').default

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
    var that = this

    return function(event) {
      that.fetchPage(page)
    }
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
