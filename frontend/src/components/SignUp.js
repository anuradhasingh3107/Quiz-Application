import React, { Component } from "react";
import {signupState} from '../constants/Constants';
import {sendRequest} from '../utilities/RequestUtils';
import "bootstrap/dist/css/bootstrap.min.css";

export default class SignUp extends Component {
    
    //constructor
    constructor(props) {
        super(props);
        this.state = signupState;
        this.register = this.register.bind(this);
        this.handleChangeFor = this.handleChangeFor.bind(this);
        this.processResponse = this.processResponse.bind(this);
        this.routetologin = this.routetologin.bind(this);
        // this.resetState = this.resetState.bind(this);
    }

    handleChangeFor = (propertyName) => (event) => {
        console.log(propertyName);
        if (propertyName === 'userName') {
            this.state.userName = event.target.value;
        } 
        else if (propertyName === 'userId') {
            this.state.userId = event.target.value;
        }
        else {
            this.state.passWord = event.target.value;
        }
        if(this.state.userName !== "" && this.state.passWord !== "") {
            this.state.loginDisability = false;
        }
        this.setState(this.state);
    }

    register(e) {
        e.preventDefault();
        let url = '/Quiz/v1/signup/';
        let reqData = {
          userName: this.state.userName,
          passWord: this.state.passWord,
          userId: this.state.userId,
          
        };
        let reqString = JSON.stringify(reqData);
        let options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: reqString
        };
        sendRequest(url, options, this.processResponse);
      }

    processResponse(res) {
        if (res.status === 200) {
            console.log("User registered");
            this.props.history.push("/signup");
        } else {
            //this.setState(this.resetState());
        }
        
    }

    routetologin(event){
        this.props.history.push("/");
      }
  
    
    render() {
        return (
            <form onSubmit={this.register}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" 
                    placeholder="User name" id="userName" type='text' 
                    value={this.state.userName} onChange={ this.handleChangeFor('userName') } />
                </div>

                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" className="form-control" 
                    placeholder="User Id" id="userId" type='text' 
                    value={this.state.userId} onChange={ this.handleChangeFor('userId') } />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                    placeholder="Enter password" id="passWord" type='text' 
                    value={this.state.passWord} onChange={ this.handleChangeFor('passWord') } />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered?
                     <button className="btn btn-primary" type="button" onClick={this.routetologin}> Sign In </button>
                </p>
            </form>
        );
    }
}
