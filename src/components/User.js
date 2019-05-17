var React = require('react');
var h = React.createElement;

module.exports = function User(props) {
    console.log('rendering...')
    var user = props.user,
    isSelected = props.isSelected,
    clickHandler = props.clickHandler,
    $name = h('h1', {key: 'name'}, user.name), 
    $email = h('p', {key: 'email'}, user.email), 
    $phone = h('p', {key: 'phone'}, user.phone),
    $button = h('button', {onClick: clickHandler, id: user.id, key: 'button'}, 'Select');
    
    return h(
        'div',
        {style: {border: '1px solid', padding: '10px', backgroundColor: isSelected ? '#d7d7d7' : '#fff'}},
        [$name, $email, $phone, $button]
    );
};