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
      // dispatch({ type: 'SET_LOADING', payload: true })
      dispatch({ type: 'SET_CAR', payload: {}})
        axios({
          method:'get',
          url: 'http://localhost:3000/cars/'+id,
          headers: {
            access_token: token
          }
        })
          .then(response => {
            dispatch({ type: 'SET_CAR', payload: response.data.car})
          })
          .catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error })
          })
          .finally(_ => {
            dispatch({ type: 'SET_LOADING', payload: false })
          })
    }
}

export const addCar = (data , token) => {
  return (dispatch, getState) => {
        axios({
          method:'post',
          url: 'http://localhost:3000/cars',
          headers: {
            access_token: token
          },
          data
        })
          .then(response => {
            dispatch({ type: 'ADD_CAR', payload: response.data})
          })
          .catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error })
          })
    }
}

export const updateCar = (id, data , token) => {
  return (dispatch, getState) => {
        axios({
          method:'put',
          url: 'http://localhost:3000/cars/'+id,
          headers: {
            access_token: token
          },
          data
        })
          .then(response => {
            const state = getState()
            const cars = state.cars
            let newData = []
            cars.forEach(data => {
              if (data._id.toString() !== `ObjectId(${id})` ) {
               newData.push(data) 
              }
            })
            dispatch({ type: 'SET_CAR', payload: response.data})
          })
          .catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error })
          })
    }
}

export const destroyCar = (id , token) => {
  return (dispatch, getState) => {
        axios({
          method:'delete',
          url: 'http://localhost:3000/cars/'+id,
          headers: {
            access_token: token
          }
        })
          .then(response => {
            const state = getState()
            const cars = state.cars
            let newData = []
            cars.forEach(data => {
              if (data._id.toString() !== `ObjectId(${id})` ) {
               newData.push(data) 
              }
            })
            dispatch({ type: 'SET_CAR', payload: newData})
          })
          .catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error })
          })
    }
}
