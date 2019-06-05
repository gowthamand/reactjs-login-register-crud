import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

export default class Register extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'https://gowtham-rest-api-crud.herokuapp.com/register';
        const email = this.state.email;
        const password = this.state.password;
        let bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('password', password);
        axios.post(url, bodyFormData)
            .then(result => {
                if (result.data.status) {
                    localStorage.setItem('token', result.data.token);
                    this.setState({redirect: true, isLoading: false});
                    localStorage.setItem('isLoggedIn', true);
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ authError: true, isLoading: false });
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-register mx-auto mt-5">
                    <div className="card-header">Register an Account</div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
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
                                            <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" required="required" />
                                            <label htmlFor="confirmPassword">Confirm password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={'/'}>Login Page</Link>
                            <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}


