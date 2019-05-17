var React = require('react');
var h = React.createElement;

module.exports = function User(props) {
    var user = props.user,
    clickHandler = props.clickHandler,
    $name = h('h1', {key: 'name'}, user.name), 
    $email = h('p', {key: 'email'}, user.email), 
    $phone = h('p', {key: 'phone'}, user.phone),
    $button = h('button', {onClick: clickHandler, id: user.id, key: 'button'}, 'Select');
    
    return h(
        'div',
        {style: {border: '1px solid', padding: '10px'}},
        [$name, $email, $phone, $button]
    );
};