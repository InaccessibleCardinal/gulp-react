var h = require('react').createElement;
var ReactDOM = require('react-dom');
// var Button = require('./components/Button');
var Users = require('./components/Users');

ReactDOM.render(
    h(Users),
    document.getElementById('root')
);