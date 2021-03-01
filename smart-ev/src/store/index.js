import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import carReducer from './reducers/carReducer'
import whistlistReducer from './reducers/whislistReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  whistlistReducer,
  carReducer,
  userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store