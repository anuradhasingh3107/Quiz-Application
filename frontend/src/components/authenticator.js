import React, { Component } from 'react';
import {loginState} from '../constants/Constants';
import {sendRequest} from '../utilities/RequestUtils';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";


class Authenticator extends Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = loginState;
        this.authenticate = this.authenticate.bind(this);
        this.handleChangeFor = this.handleChangeFor.bind(this);
        this.processResponse = this.processResponse.bind(this);
        this.routetosignup = this.routetosignup.bind(this);
        // this.resetState = this.resetState.bind(this);
    }

    // resetState() {
    //     return resetState = {
    //         loginDisability = true,
    //         userName="",
    //         passWord=""
    //     };
    // }

    handleChangeFor = (propertyName) => (event) => {
        console.log(propertyName);
        if (propertyName === 'userName') {
            this.state.userName = event.target.value;
        } else {
            this.state.passWord = event.target.value;
        }
        if(this.state.userName !== "" && this.state.passWord !== "") {
            this.state.loginDisability = false;
        }
        this.setState(this.state);
    }

    authenticate(e) {
        e.preventDefault();
        let url = '/Quiz/v1/login/';
        let reqData = {
          userName: this.state.userName,
          passWord: this.state.passWord,
          
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
            console.log("User authenticated");
            this.props.history.push("/user");
        } else {
            //this.setState(this.resetState());
        }
        
    }

    routetosignup(event){
      this.props.history.push("/signup");
    }


render() {
    return (
      
        
          <div className="container-fluid">
            
            <div className="title">A Quiz Application</div>
            <br/>
            <form onSubmit={this.authenticate} className=".btn-flat">
              <input 
                className="form-control form-control-lg" size="lg" id="userName" type='text' placeholder="userName" value={this.state.userName} onChange={ this.handleChangeFor('userName') }/>  
              <br/>
              <input 
                className="form-control form-control-lg" id="passWord" type='password' placeholder="password" value={this.state.passWord} onChange={ this.handleChangeFor('passWord') }/>  
              <br/>
              <button type="submit" className="btn btn-primary" disabled={this.state.loginDisability}> Login </button>
              <br/><br/><br/>
              <button className="btn btn-primary" type="button" onClick={this.routetosignup}> Signup </button>
            </form>
            
                      
          </div>
          
    )
  }
}
export default Authenticator;
