const initState = {
  whistlists: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_WHISTLIST': 
      return {...state, whistlists: [...state.whistlists, action.payload]}
    case 'SET_WHISTLISTS' :
      return {...state, whistlists: action.payload }
    default : 
      return state
  }
}

export default reducer