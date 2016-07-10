var Article = function(props) {
  return (
    <div
      className="article"
      style={{clear: 'both'}}
    >
      <img
        src={props.image_url}
        onClick={props.handleClick}
        style={{width: '450px', float: 'left'}}
      />
      <h2>
        {props.title}
      </h2>
    </div>
  )
}

var ArticleList = function(props) {
  return (
    <div className="article-list">
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
      <div>
        Total: {props.total}
      </div>
    </div>
  )
}

var Slashr = React.createClass({
  getRandomIntInclusive: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  handleClick: function() {
    console.log('handleClick called')
    //var index = this.getRandomIntInclusive(0, this.articles.length - 1)

    //this.setState({
      //image: this.articles[index]
    //})
  },

  getInitialState: function() {
    return {
      articles: []
    }
  },

  componentDidMount: function() {
    var that = this

    fetch('/slashr/page1.json').then(function(response) {
        response.json().then(function(json) {
          that.setState({
            articles: json.data,
            total: json.total
          })
        })
      })
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
        />
      </div>
    )
  }
})

ReactDOM.render(<Slashr/>, document.getElementById('root'))
