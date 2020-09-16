import React, { Component } from "react";
import { listState } from '../constants/Constants';
import { sendRequest } from '../utilities/RequestUtils';
import "bootstrap/dist/css/bootstrap.min.css";

export default class admin extends Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = listState;
        this.list = this.list.bind(this);

        this.processResponse = this.processResponse.bind(this);


    }


    list(e) {
        e.preventDefault();
        let url = '/Quiz/v1/admin/';
        let options = {
            method: 'GET',

        };
        sendRequest(url, options, this.processResponse);

    }

    processResponse(users) {
        if (users) {
           this.state.users=users;
           this.setState(this.state);
        } else {
            console.log("Unable to get user list");
        }

    }


    render() {
        return (

            <form onSubmit={this.list}>
                <h3>Admin Page</h3>

                <button type="submit" className="btn btn-primary btn-block">List All users</button>


                {
                   this.state.users.length>0 ?
                        <div>
                            <h3>Users List</h3>
                            <table className="table table-striped" style={{ marginTop: 20 }} >
                               
                                <tbody>
                                {
                                Object.entries(this.state.users).map((user,index) => {
                                return (
                                    <thead>
                                    <tr>
                                        <th>{user[1].UserName}</th>
                                        <th>{user[1].UserId}</th>

                                    </tr>
                                </thead>
                                );
                                })
                                }
                            

                                </tbody>
                            </table>
                        </div>
                        : null
                }


                </form>


        );
    }
}
