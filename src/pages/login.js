import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


export default class Login extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
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
        const url = 'https://gowtham-rest-api-crud.herokuapp.com/login';
        const email = this.state.email;
        const password = this.state.password;
        let bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('password', password);
        axios.post(url, bodyFormData)
            .then(result => {
                if (result.status) {
                    this.setState({redirect: true, isLoading: false})
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
            })
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="row">
                    <aside className="col-md-4">&nbsp;</aside>
                    <aside className="col-md-4">
                        <div className="card">
                            <article className="card-body">
                                <button className="float-right btn btn-outline-primary">Sign up</button>
                                <h4 className="card-title mb-4 mt-1">Sign in</h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Your email</label>
                                        <input className="form-control" placeholder="Email" type="email" name="email" onChange={this.handleEmailChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <Link to={'/create'} className="float-right">Forgot?</Link>
                                        <label>Your password</label>
                                        <input className="form-control" placeholder="******" type="password" name="password" onChange={this.handlePwdChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label> <input type="checkbox"/> Save password </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-success btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Login &nbsp;&nbsp;&nbsp;
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            ) : (
                                                <span></span>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </article>
                        </div>
                        {this.renderRedirect()}
                    </aside>
                </div>
            </div>
        );
    }
}

