import React from 'react';
import Edit from './edit';

export default React.createClass({

    getInitialState: function() {
        return {
            user: []
        }
    },

    componentWillMount: function() {
        var _this = this;
        this.setState({
            user: 'Joe Burton'
        });
    },

    render: function() {
        console.log('edit-container');
        return (
            <Edit user={this.state.user} />
        )
    }

});
