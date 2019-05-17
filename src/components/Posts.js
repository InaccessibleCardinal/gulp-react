var React = require('react');
var WithService = require('./WithService');
var h = React.createElement;

function Posts(props) {
    var posts = props.posts;
    var $posts = posts.map(function(p) {
        return h(Post, {key: p.id, post: p});
    });
    return h('div', {children: $posts});
}

function Post(props) {
    var post = props.post;
    var $title = h('h2', {key: 'title'}, post.title);
    var $body = h('p', {key: 'body'}, post.body);
    return h('div', {children: [$title, $body]});
}
//little hoc action
module.exports = WithService('http://jsonplaceholder.typicode.com/posts', 'posts', Posts);