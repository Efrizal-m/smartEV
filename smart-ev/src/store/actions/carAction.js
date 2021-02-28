import axios from 'axios'

export const fetchCars = () => {  
  return (dispatch, getState) => {
      dispatch({ type: 'SET_LOADING', payload: true })
      dispatch({ type: 'SET_CARS', payload: []})
        axios({
          method:'get',
          url: 'http://localhost:3000/cars',
        })
          .then(response => {
            setTimeout(() => {
              dispatch({ type: 'SET_CARS', payload: response.data.cars})
            }, 1000)    
          })
          .catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error })
          })
          .finally(_ => {
            setTimeout(() => {
              dispatch({ type: 'SET_LOADING', payload: false })
            }, 1000)    
          })
    }
}

export const fetchDetail = (id , token) => {  
  return (dispatch, getState) => {
      dispatch({ type: 'SET_LOADING', payload: true })
      dispatch({ type: 'SET_CAR', payload: {}})
        axios({
          method:'get',
          url: 'http://localhost:3000/cars/'+id,
          headers: {
            access_token: token
          }
        })
          .then(response => {
            setTimeout(() => {
              dispatch({ type: 'SET_CAR', payload: response.data.car})
            }, 1000)    
          })
          .catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error })
          })
          .finally(_ => {
            setTimeout(() => {
              dispatch({ type: 'SET_LOADING', payload: false })
            }, 1000)    
          })
    }
}

