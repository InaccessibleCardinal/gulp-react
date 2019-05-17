var h = require('react').createElement;
var ReactDOM = require('react-dom');
var Users = require('./components/Users');
var Posts = require('./components/Posts');
var ConnectedCounter = require('./components/Provider');

var children = [
    h(Users, {key: 'users'}),
    h(Posts, {key: 'posts'})
];

var UsersAndPosts = h('div', {key: 'userpostapp', style: {display: 'flex', width: '100%'}, children: children});
var CounterApp = h('div', {key: 'counterapp'}, ConnectedCounter());

ReactDOM.render(
    h('div', {children: [CounterApp, UsersAndPosts]}),
    document.getElementById('root')
);