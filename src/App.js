// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//         <div className="container">
//             <h2>Modal Example</h2>
//             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
//                 Open modal
//             </button>
//             <div className="modal fade" id="myModal">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h4 className="modal-title">Modal Heading</h4>
//                             <button type="button" className="close" data-dismiss="modal">&times;</button>
//                         </div>
//
//                         <div className="modal-body">
//                             Modal body..
//                         </div>
//
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
//                         </div>
//
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     </div>
//   );
// }
//
// export default App;


import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";


class App extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <h2 className="text-center">Welcome to React</h2>
                    <Router>

                        <Route exact path='/' component={ Login } />
                        <Route path='/dashboard' component={ Dashboard } />
                        {/*<Route path='/about' component={ Index } />*/}
                        {/*<Route path='/create' component={ Create } />*/}

                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
