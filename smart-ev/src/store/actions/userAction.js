import axios from 'axios'
import Swal from 'sweetalert2'

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
      Swal.fire(
        'Registered!',
        'You can go to login page now.',
        'success'
      )
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