import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import store from '../store/index';
import Authenticator from './authenticator';
import UserInfo from './UserInfo';
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionBoxInterface from './QuestionBoxInterface';
import SignUp from './SignUp';


class App extends Component {

  //initiate data store and other required things
  constructor(props){
    super(props);
    this.state = {};
      
    //bind necessary functions
  };

  //render main parent
  render() {
    return (
      //<Provider store={store}>
        <Router>
          <div className="container">
            <Route exact path="/" component={Authenticator} />
            <Route exact path="/user" component={UserInfo} />
            <Route exact path="/QuestionBox" component={QuestionBoxInterface} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      //</Provider>
    );
  };
};

export default App;
