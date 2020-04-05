import axios from 'axios'

const baseURL = 'http://localhost:3000/api/v1/sections/'

export const loadSections = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SECTIONS'})
    axios.get(baseURL).then(res => {
      dispatch({ type: 'SECTIONS_LOADED', sections: res.data })
      }
    )
  }
}
