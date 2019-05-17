var React = require('react');
var fetch = require('../fetch');
var h = React.createElement;
var Component = React.Component;

function Users(props) {
    Component.call(this);
    this.state = {
        users: [],
        error: null
    };
}
Users.prototype = Object.create(Component.prototype);
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
Users.prototype.render = function() {
    var users = this.state.users;
    if (users.length > 0) {
        var usersMarkup = users.map(function(user) {
            return h(User, {user: user, key: user.id});
        });
        return h('div', null, usersMarkup);
    } else {
        return h('div', null, 'loading...');
    }
}

function User(props) {
    var user = props.user;
    var $name = h('h1', {key: 'name'}, user.name), 
    $email = h('p', {key: 'email'}, user.email), 
    $phone = h('p', {key: 'phone'}, user.phone);
    return h(
        'div',
        {style: {border: '1px solid', padding: '10px'}},
        [$name, $email, $phone]
    );
}

module.exports = Users;