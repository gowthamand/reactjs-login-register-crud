import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import Register from "./pages/register";

class App extends Component {

    constructor(props){
        super(props);
    }



    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path='/' component={ Login } />
                    <Route path='/dashboard' component={ Dashboard } />
                    <Route path='/index'  component={ Index } />
                    <Route path='/register'  component={ Register } />
                    <Route path='/add' component={ AddPage } />
                    <Route path='/edit/' component={ EditPage } />
                </Router>
            </div>
        );
    }
}

export default App;
