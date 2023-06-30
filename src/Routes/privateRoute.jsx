import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    //const isAuth = useSelector((store) => store.AuthReducer.isAuth)
    const [isAuth, setisAuth] = React.useState(localStorage.getItem('isAuth')?true:false)
    
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={'/login'} state={location.pathname} replace />;   
    }
    return children
}

export default PrivateRoute
