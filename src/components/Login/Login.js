import React, { Component } from "react";
import axios from 'axios';
import { Default } from 'react-awesome-spinners'
import '../Login/Login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading:false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0 && !this.state.loading;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const userpass = btoa(this.state.username+':'+this.state.password)
    this.setState({loading:true})
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/v1/test_auth',
      data: '',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + userpass
      }
    })
      .then((response) => {
        console.log(response)
      this.props.setIsLogin(false)
      })
      .catch(err => alert(err))
      .finally(() => this.setState({loading:false}))
  }

  render() {
    return (
      <div className = "main">
        <h1>Welcome to Employee Portal</h1>
        <form className="loginContainer" onSubmit={this.handleSubmit}>
          <input className="textbox" id="username" type="text"
            onChange={this.handleChange}
            placeholder="Enter Username"
          />
          <input className="textbox" id="password" type="password"
            onChange={this.handleChange}
            placeholder="Enter Password"
          />
          <br/>
          <input className="submitButton" type="submit" disabled={!this.validateForm()} value="Login"/>
        </form>
        <div className="loadingIcon">
        {this.state.loading && <Default color="red"/>}
        </div>
      </div>
    );
  }
}