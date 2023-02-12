import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {// ...rest is the props of the Route component
    const { auth } = useSelector(state => ({ ...state })); // ...state is the state of the authReducer
    return auth && auth.token ? children : <Navigate to="/login" /> // if the user is logged in, the user can access the route, otherwise the user is redirected to the login page
}

export default PrivateRoute;