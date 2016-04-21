import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="user-page">
                <h1>Edit: User</h1>
                <h2 className="user">{this.props.user}</h2>
            </div>
        )
    }
});