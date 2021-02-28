import axios from 'axios'

export const loginUser = payload => {
  return (dispatch, getState) => {
    axios({
      method:'post',
      url: 'http://localhost:3000/login',
      data: payload
    })
    .then(response => {
      localStorage.setItem("access_token", response.data.access_token)
      localStorage.setItem("user", response.data.user)
      dispatch({
          type: "SET_AUTHENTICATE",
          payload: true
      })
    })
    .catch(error => {
      dispatch({
        type: "SET_ERROR",
        payload: error
    })
  })
  }
};

export const registerUser = payload => {
  return (dispatch, getState) => {
    axios({
      method:'post',
      url: 'http://localhost:3000/register',
      data: payload
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }
};

export const logoutUser = payload => {
  return (dispatch, getState) => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
      dispatch({
          type: "SET_AUTHENTICATE",
          payload: false
      })
  }
};