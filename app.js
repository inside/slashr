var Image = function(props) {
  return (
    <img
      src={props.image}
      onClick={props.onClick}
      style={{width: '250px'}}
    />
  )
}

var Slashr = React.createClass({
  images: [
    'http://67.media.tumblr.com/13864b31795b1a52a50a04866de39c4e/tumblr_o9u9s5qM8g1r539hzo1_500.jpg',
    'http://66.media.tumblr.com/56a7e7ecf964a7b6c148ac0e46f8c56f/tumblr_o9rdpwT7aw1r539hzo1_500.jpg',
    'http://65.media.tumblr.com/8ea2de397f19b9520d98da4bb1494aa9/tumblr_o9mxwgNjHo1r539hzo1_500.jpg',
    'http://66.media.tumblr.com/b85637e9aa950379769a98f27ba09a6b/tumblr_o9j2iqtf0C1r539hzo1_500.jpg'
  ],

  getRandomIntInclusive: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  handleClick: function() {
    var index = this.getRandomIntInclusive(0, this.images.length - 1)

    this.setState({
      image: this.images[index]
    })
  },

  getInitialState: function() {
    return {
      image: this.images[0]
    }
  },

  render: function() {
    return (
      <div>
        <h1>
          Hello, this is Slashr!
        </h1>
        <Image
          image={this.state.image}
          onClick={this.handleClick}
        />
      </div>
    )
  }
})

ReactDOM.render(
    <Slashr/>,
    document.getElementById('root'))
