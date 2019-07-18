import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div id="wrapper">
                <ul className="sidebar navbar-nav">
                    <li className="nav-item active">
                        <Link to={'/dashboard'} className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>&nbsp;Dashboard</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to={''}  id="pagesDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>&nbsp;Pages</span>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                            <h6 className="dropdown-header">Login Screens:</h6>
                            {/*<a className="dropdown-item" href="login.html">Login</a>*/}
                            {/*<a className="dropdown-item" href="register.html">Register</a>*/}
                            {/*<a className="dropdown-item" href="forgot-password.html">Forgot Password</a>*/}
                            <div className="dropdown-divider"></div>
                            <h6 className="dropdown-header">Other Pages:</h6>
                            {/*<a className="dropdown-item" href="404.html">404 Page</a>*/}
                            {/*<a className="dropdown-item" href="blank.html">Blank Page</a>*/}
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={'/index'} className="nav-link"><i className="fas fa-fw fa-chart-area"></i>
                            <span>&nbsp;CRUD App</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/fileupload'} className="nav-link"><i className="fas fa-fw fa-file-archive"></i>
                            <span>&nbsp;File Upload</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw fa-table"></i>
                            <span>&nbsp;Tables</span></a>
                    </li>
                </ul>
            </div>
        );
    }
}
