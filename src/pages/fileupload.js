import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";

export default class FileUploadPage extends Component {

    constructor(props) {
        super(props);
        this.file = '';
        this.url = 'https://gowtham-rest-api-crud.herokuapp.com/fileupload/';
        this.token = localStorage.getItem('token');
    }

    state = {
        id: '',
        redirect: false,
        isLoading: false
    };

    componentDidMount() {
        axios.get(this.url, { params: { token: this.token}})
            .then(response => {
                const emp = response.data.employee;
                this.setState({id: emp.id });
                document.getElementById('inputName').value = emp.name;
                document.getElementById('inputPhone').value = emp.phone;
                document.getElementById('inputEmail').value = emp.email;
                document.getElementById('inputLoca').value = emp.location;
                document.getElementById('inputEmpId').value = emp.emp_id;
                document.getElementById('inputComp').value = emp.name;
            })
            .catch(error => {
                // this.setState({ toDashboard: true });
                console.log(error);
            });

    }

    handleChange = event => {
        event.preventDefault();
        this.file = event.target.files[0];
        document.getElementById('fileLabel').innerHTML = event.target.files[0].name;
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: false});
        // const name = document.getElementById('inputName').value;
        // const phone = document.getElementById('inputPhone').value;
        // const email = document.getElementById('inputEmail').value;
        // const location = document.getElementById('inputLoca').value;
        // const empid = document.getElementById('inputEmpId').value;
        // const company = document.getElementById('inputComp').value;

        // axios.post(url, formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }).then(result => {
        //     if (result.data.status) {
        //         this.setState({redirect: true, isLoading: false})
        //     }
        // }).catch(error => {
        //     // this.setState({ toDashboard: true });
        //     console.log(error);
        // });

        let bodyFormData = new FormData();
        bodyFormData.append('image', this.file);
        bodyFormData.set('token', this.token);
        axios.post(this.url, bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }})
            .then(result => {
                if (result.data.status) {
                    this.setState({redirect: true, isLoading: false})
                }
            })
            .catch(error => {
                // this.setState({ toDashboard: true });
                console.log(error);
            });
    };

    getYear() {
        return new Date().getFullYear();
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
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
                                <li className="breadcrumb-item active">File Upload</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">File Upload</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="input-group input-group-lg">
                                                        <div className="custom-file">
                                                            <input type="file" onChange={this.handleChange}  className="custom-file-input" id="fileInput"/>
                                                                <label className="custom-file-label" id="fileLabel" htmlFor="fileInput">Choose file</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Upload &nbsp;&nbsp;&nbsp;
                                                            {isLoading ? (
                                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                            ) : (
                                                                <span></span>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                    {this.renderRedirect()}
                                </div>
                            </div>
                        </div>

                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website {this.getYear()}</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}


