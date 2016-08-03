import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ArticleList from './components/article-list'
import Pagination from './components/pagination'
import Sorts from './components/sorts'

export default class Slashr extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      total: null,
      page: null,
      pages: null,
      sort: 'alphaaz',
    }

    this.handleSortClick = () => {
      let articles = Array.from(this.state.articles)

      this.setState({
        sort: this.state.sort === 'alphaaz' ? 'alphaza' : 'alphaaz'
      })

      let order = this.state.sort === 'alphaaz' ? 1 : -1

      articles.sort(function(a, b) {
        return a.title.localeCompare(b.title) * order
      })

      this.setState({articles})
    }
  }

  fetchPage(page) {
    fetch(`/slashr/page${page}.json`).then(response => {
      response.json().then(json => {
        this.setState({
          articles: json.data,
          total: json.total,
          page: page,
          pages: Math.ceil(json.total / 5),
        })
      })
    })
  }

  handleImageClick(e) {
    if (e.target.style.width === '') {
        e.target.style.width = '200px'
    } else {
        e.target.style.width = ''
    }
  }

  componentDidMount() {
    this.fetchPage(this.props.params.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.page !== nextProps.params.page) {
      this.fetchPage(nextProps.params.page)
    }
  }

  render() {
    return (
      <div>
        <h1>
          Hello, this is Slashr!
        </h1>
        <Pagination
          total={this.state.total}
          page={this.state.page}
          pages={this.state.pages}
        />
        <Sorts
          label={this.state.sort}
          onSortClick={this.handleSortClick}
        />
        <ArticleList
          articles={this.state.articles}
          onImageClick={this.handleImageClick}
        />
      </div>
    )
  }
}
