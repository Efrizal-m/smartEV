import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  // Route
} from 'react-router-dom'
import {
  Home,
  Detail,
  Whistlist,
  Upload,
  Login,
  Register,
  Main
} from './pages'
import { Provider } from 'react-redux'
import store from './store/index'
import AuthRoute from './components/AuthRoute' 

const App = () => {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <AuthRoute path="/" exact type="guest">
              <Main></Main>
            </AuthRoute>
            <AuthRoute path="/login" type="guest">
              <Login></Login>
            </AuthRoute>
            <AuthRoute path="/register" type="guest">
              <Register></Register>
            </AuthRoute>
            <AuthRoute path="/cars/:id" type="private">
              <Detail></Detail>
            </AuthRoute>
            <AuthRoute path="/cars" type="private">
              <Home></Home>
            </AuthRoute>
            <AuthRoute path="/whistlists" type="private">
              <Whistlist></Whistlist>
            </AuthRoute>
            <AuthRoute path="/upload" type="private">
              <Upload></Upload>
            </AuthRoute>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
