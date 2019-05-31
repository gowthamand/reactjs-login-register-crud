import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link} from "react-router-dom";
// import axios from 'axios';
// import { Link, Redirect } from 'react-router-dom';


export default class AddPage extends Component {



    render() {
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Add</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Employee Add</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="firstName" className="form-control" placeholder="First name" required="required" autoFocus="autofocus" />
                                                        <label htmlFor="firstName">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="text" id="lastName" className="form-control" placeholder="Last name" required="required" />
                                                            <label htmlFor="lastName">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" />
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required" />
                                                        <label htmlFor="inputPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" required="required"/>
                                                        <label htmlFor="confirmPassword">Confirm password</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-primary btn-block" href="login.html">Register</a>
                                    </form>
                                    <div className="text-center">
                                        <a className="d-block small mt-3" href="login.html">Login Page</a>
                                        <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website 2019</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        );
    }
}
