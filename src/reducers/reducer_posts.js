import { FETCH_POSTS } from '../actions'

export default function(state={}, action) {

  function mappedPosts (posts) {
    return posts.reduce((memo, post) => {
      let postID = post.id.toString()
      delete post.id

      memo[postID] = post
      return memo
    }, {})
  }

  switch (action.type) {
    case FETCH_POSTS:
      return mappedPosts(action.payload.data)
    default:
      return state
  }
}
