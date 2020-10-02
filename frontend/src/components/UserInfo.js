import React, {Component} from 'react';
import store from '../store/index';
import {userState} from '../constants/Constants';
import {sendRequest} from '../utilities/RequestUtils';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import QuestionBoxInterface from './QuestionBoxInterface';


class UserInfo extends Component {

    constructor(props) {
        super(props);

        // this is initial state
        this.state = store.getState().userInfoState;
        this.getStateFromStore = this.getStateFromStore.bind(this);
        this.processRequest = this.processRequest.bind(this);
    }

    getStateFromStore() {
        let state = store.getState();
        return state.userInfoState;
    }
    componentDidMount() {
        this.processRequest();
    };

    processRequest() {}

    render() {
        let role = this.state.role;

        return (
            <div>

                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="" className="navbar-brand">My Profile</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-brand">
                                    <Link to="/QuestionBox" className="nav-link">Quiz Sets</Link>
                                </li>
                                <li className="navbar-brand">
                                    <Link to="" className="nav-link">LeaderBoard</Link>
                                </li>
                                {
                                role === 'A' ? <li lassName="navbar-brand">
                                    <Link to="/admin" className="nav-link">Admin</Link>
                                </li> : null
                            } </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/QuestionBox"
                        component={QuestionBoxInterface}/>

                </div>

            </div>
        );
    }
}

export default UserInfo;
