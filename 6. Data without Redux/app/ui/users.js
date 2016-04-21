import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div className="users-page">
                <h1>App: Users</h1>
                <ul>
                    {this.props.users.map(function(user, i) {
                        return (
                            <li key={user.id}><Link to="/users/edit">{user.name}</Link></li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});