import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import Moment from 'react-moment';

export default class FileUploadPage extends Component {

    constructor(props) {
        super(props);
        this.file = '';
        this.url = 'https://gowtham-rest-api-crud.herokuapp.com/';
        this.token = localStorage.getItem('token');
    }

    state = {
        files: [],
        redirect: false,
        isLoading: false,
    };

    componentDidMount() {
        axios.get(this.url + 'fileupload', { params: { token: this.token}})
            .then(response => {
                const files = response.data.data.files;
                this.setState({ files: files });
            })
            .catch(error => {
                this.setState({ toDashboard: true });
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
        this.setState({isLoading: true});
        let bodyFormData = new FormData();
        bodyFormData.append('file', this.file);
        bodyFormData.set('token', this.token);
        axios.post(this.url + 'fileupload', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }})
            .then(result => {
                if (result.data.status) {
                    this.componentDidMount();
                    this.setState({redirect: true, isLoading: false});
                    document.getElementById('fileInput').value = "";
                    document.getElementById('fileLabel').innerHTML = "Choose file";
                }
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    };

    getYear() {
        return new Date().getFullYear();
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/fileupload' />
        }
    };

    handleClickDelete = event => {
        const id = event.target.value;
        document.getElementById('delete' + id).classList.remove('d-none');
        const preview = document.querySelectorAll ('.delete' + id);
        preview[0].setAttribute("disabled", true);
        axios.delete(this.url + 'filedelete/' + id , { params: { token: this.token}})
            .then(response => {
                this.componentDidMount();
            })
            .catch( error => {
                console.log(error.toString());
                this.componentDidMount();
            });
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
                            <div style={{padding:10}}></div>
                            <div className="table">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>image</th>
                                        <th>Created</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.files.map((files , index)=>
                                        <tr key={files.id}>
                                            <td>{index + 1}</td>
                                            <td><img src={this.url + '/uploads/students/' + files.name} style={{height:50}} alt={files.name} /></td>
                                            <td>
                                                <Moment format="YYYY-MM-DD">{files.created_at}</Moment>
                                            </td>
                                            <td className="text-center">
                                                <button value={files.id}  className={'btn btn-sm btn-danger delete' + files.id } onClick={this.handleClickDelete} >Delete &nbsp;&nbsp;&nbsp;
                                                        <span className="spinner-border spinner-border-sm d-none" id={'delete'+files.id} role="status" aria-hidden="true"></span>
                                                </button>
                                            </td>
                                        </tr>)
                                    }
                                    </tbody>
                                </table>
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


