import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './_login/PrivateRoute';
import { Login } from './_login/Login';
import { Search } from './_search/Search';

class App extends React.Component {
    render() {
        return (
            <Router>
                    <PrivateRoute path="/search" component={Search} />
                    <Route exact path="/login" component={Login} />
                    <Redirect from="/" to="/login" />
            </Router>
        );
    }
}

export { App };
