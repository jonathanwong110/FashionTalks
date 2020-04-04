import axios from 'axios'

const baseURL = 'http://localhost:3000/api/v1/posts/'

export const loadPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS'})
    axios.get(baseURL).then(res => {
      dispatch({ type: 'POSTS_LOADED', posts: res.data })
      }
    )
  }
}
