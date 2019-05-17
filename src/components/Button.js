var React = require('react');
var h = React.createElement;

module.exports = function Button(props) {
    return h(
        'button',
        {onClick: function(){console.log('clicking...')}},
        'Click Me'
    );
}