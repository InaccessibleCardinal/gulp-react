var React = require('react');
var WithService = require('./WithService');
var h = React.createElement;

function Posts(props) {
    var posts = props.posts;
    var $posts = posts.map(function(p) {
        return h(Post, {key: p.id, post: p});
    });
    return h('div', {className: 'flex', children: $posts});
}

function Post(props) {
    var post = props.post;
    var $title = h('h2', {key: 'title'}, post.title);
    var $body = h('p', {key: 'body'}, post.body);
    return h(
        'div', 
        { 
            style: {borderBottom: '1px solid #d7d7d7'},
            children: [$title, $body]
        }
    );
}
//a little hoc action
module.exports = WithService('http://jsonplaceholder.typicode.com/posts', 'posts', Posts);