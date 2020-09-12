import React, { Component } from 'react';
import {userState} from '../constants/Constants';
import {sendRequest} from '../utilities/RequestUtils';

class UserInfo extends Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = userState
    }

    render() {
        return (
          <div className="">
              <div>
              <h>User Info:{this.state.userName}</h>
              <br/>
              <h>Score={this.state.Score}</h>
          
              </div>
              
          </div>
        )
      }
    }
    export default UserInfo;
