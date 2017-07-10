import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    const posts = this.props.posts
    let post = ''
    return Object.keys(posts).map(postID => {
      post = posts[postID]

      return (
        <li className="list-group-item" key={postID}>
          {post.title}
        </li>
      )
    })
  }


  render () {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

// create this function any time you want to map app state to a component
function mapStateToProps({posts}) {
  return {posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
