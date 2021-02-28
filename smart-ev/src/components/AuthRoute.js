import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from 'react-redux'

const AuthRoute = props => {
    const { type } = props
    const isAuthenticate = useSelector(state => state.userReducer.isAuthenticate)  
  
    if (type === "private" && !isAuthenticate) return <Redirect to="/login" />;
    else if (type === "guest" && isAuthenticate) return <Redirect to="/cars" />;

    return <Route {...props} />;
};

export default AuthRoute