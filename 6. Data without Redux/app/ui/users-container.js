import React, {Component} from 'react';
import Users from './users';
import { getUsers } from 'api/user';

export default class UsersContainer extends Component {

    constructor(props) {
        super(props);
        this.state = this.buildInitialState();
    }

    buildInitialState() {
        return {
            users: []
        }
    }

    componentWillMount() {
        var _this = this;
        getUsers().then(function(response) {
            _this.setState({
                users: response.data
            })
        }).catch(function(err) {
            console.error(err);
        });
    }

    render() {
        return (
            <Users users={this.state.users} />
        )
    }

};


UsersContainer.propTypes = {
    
};


