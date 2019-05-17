var React = require('react');
var createClass = require('../createClass');
var User = require('./User');
var fetch = require('../fetch');
var h = React.createElement;
var Component = React.Component;

function Users(props) {
    Component.call(this);
    this.state = {
        users: [],
        error: null,
        selectedUser: null
    };
    this.selectUser = this.selectUser.bind(this);
}

createClass(
    Users, 
    Component,
    {
        componentDidMount: function() {
            var u = 'http://jsonplaceholder.typicode.com/users';
            var _this = this;
            fetch(u).then(function(data) {
                _this.setState({
                    users: data
                });
            })
            .catch(function(e) {
                _this.setState({error: e});
            });
        },
        selectUser: function(e) {
            var id = e.target.id;
            this.setState({selectedUser: parseInt(id, 10)});
        },
        render: function() {
            var users = this.state.users;
            var selectedUser = this.state.selectedUser;
            var _this = this;
            if (users.length > 0) {
                var usersMarkup = users.map(function(user) {
                    return h(
                        User, 
                        {
                            user: user, 
                            clickHandler: _this.selectUser, 
                            isSelected: selectedUser === user.id, 
                            key: user.id
                        }
                    );
                });
                return h('div', {className: 'flex'}, usersMarkup);
            } else {
                return h('div', {className: 'flex'}, 'loading...');
            }
        }
    }
);

module.exports = Users;