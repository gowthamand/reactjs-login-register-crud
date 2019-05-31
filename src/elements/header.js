import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

                <Link to={'/'} className="navbar-brand mr-1">Start Bootstrap</Link>

                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle">
                    <i className="fas fa-bars"></i>
                </button>


                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." aria-label="Search"
                               aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                    </div>
                </form>

                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown no-arrow">
                        <Link to={'#'} className="nav-link dropdown-toggle" id="userDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user-circle fa-fw"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <Link to={'#'} className="dropdown-item">Settings</Link>
                            <Link to={'#'} className="dropdown-item">Activity Log</Link>
                            <div className="dropdown-divider"></div>
                            <Link to={'#'} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">Logout</Link>
                        </div>
                    </li>
                </ul>

            </nav>
        );
    }
}
