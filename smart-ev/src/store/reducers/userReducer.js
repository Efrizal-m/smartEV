const initState = {
  isAuthenticate: localStorage.getItem('access_token'),
  error: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATE':
      return {...state, isAuthenticate: action.payload}
    case 'SET_ERROR':
      return {...state, error: true}
    default : 
      return state
  }
}

export default reducer