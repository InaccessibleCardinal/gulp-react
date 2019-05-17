var React = require('react');
var setInheritance = require('../setInheritance');
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
setInheritance(Users, Component);
Users.prototype.componentDidMount = function() {
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
};
Users.prototype.selectUser = function(e) {
    var id = e.target.id;
    this.setState({selectedUser: parseInt(id, 10)});
};
Users.prototype.render = function() {
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
        return h('div', null, usersMarkup);
    } else {
        return h('div', null, 'loading...');
    }
};

module.exports = Users;