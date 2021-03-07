const initState = {
  cars: [],
  car: {},
  whistlists: [],
  inputFilteredCar: '',
  loading: false,
  error: false,
  input: {}
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CARS':
      return {...state, cars: action.payload}
    case 'SET_CAR': 
      return {...state, car: action.payload}
    case 'SET_INPUT_FILTERED_CAR': 
      return {...state, inputFilteredCar: action.payload}
    case 'ADD_CAR': 
      return {...state, cars: [...state.cars, action.payload]}
    case 'ADD_WHISTLIST': 
      return {...state, whistlist: [...state.whistlists, action.payload]}
    case 'SET_LOADING': 
      return {...state, loading: action.payload}
    case 'SET_ERROR':
      return {...state, error: action.payload}
    default: 
      return state
  }
}

export default reducer