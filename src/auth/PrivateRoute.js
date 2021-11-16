import React, { useContext } from 'react';
import { Route } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "./index";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
            navigate('/login')
        )
      }
    />
    )
}

export default PrivateRoute;
