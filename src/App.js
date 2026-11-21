import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {isAuthenticated} from './auth';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import Register from "./pages/register";
import NotFound from "./pages/notfound";
import FileUploadPage from "./pages/fileupload";

const PrivateRoute = ({component: Comp, ...rest}) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? <Comp {...props} /> : <Redirect to='/' />
    } />
);

const GuestRoute = ({component: Comp, ...rest}) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? <Redirect to='/dashboard' /> : <Comp {...props} />
    } />
);

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <GuestRoute exact path='/' component={Login} />
                        <PrivateRoute path='/dashboard' component={Dashboard} />
                        <PrivateRoute path='/index' component={Index}/>
                        <GuestRoute path='/register' component={Register} />
                        <PrivateRoute path='/add' component={AddPage} />
                        <PrivateRoute path='/edit/' component={EditPage} />
                        <PrivateRoute path='/fileupload/' component={FileUploadPage} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
