var React = require('react');
var createClass = require('../createClass');
var fetch = require('../fetch');
var h = React.createElement;
var Component = React.Component;
//try out an hoc
function WithService(url, dataName, WrappedComponent) {
    
    function Wrapper(props) {
        Component.call(this);
        this.state = {data: null};
    }
    createClass(
        Wrapper, 
        Component, {
            componentDidMount: function() {
                var _this = this;
                fetch(url)
                .then(function(data) {
                    _this.setState({data: data});
                })
                .catch(function(e) {
                    var msg = dataName + ' service call failed.';
                    _this.setState({error: msg});
                });
            },
            render: function() {
                var data = this.state.data;
                if (data) {
                    var props = {};
                    props[dataName] = data;
                    return h(WrappedComponent, props);
                } else {
                    return h('p', null, 'hoc is loading');
                }
            }
        }
    );
    
    return Wrapper;
}

module.exports = WithService;