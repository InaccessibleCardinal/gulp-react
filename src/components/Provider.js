var React = require('react');
var createClass = require('../createClass');
var createStore = require('../store/createStore');
var h = React.createElement;
var Component = React.Component;

//sort of react-redux
function Provider(props) {
    Component.call(this);
    var store = props.store;
    this.state = {storeState: store.getState()};
    this.store = store;
}

createClass(
    Provider, 
    Component,
    {
        componentDidMount: function() {
            this.subscribe();
        },
        subscribe: function() {
            var _this = this;
            this.store.subscribe(function() {
                var nextState = _this.store.getState();
                if (nextState !== _this.state.storeState) {
                    _this.setState({storeState: nextState});
                }
            });
        },
        render: function() {
            var children = this.props.children;
            var storeState = this.state.storeState;
            var _this = this;
            var connectedChildren = children.map(function(Child) {
                return h(Child, {storeState: storeState, dispatch: _this.store.dispatch, key: Math.random()});
            });
            return h('div', {children: connectedChildren});
        }
    }
);

function Counter(props) {
    Component.call(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
}

createClass(
    Counter, 
    Component,
    {
        add: function() {
            this.props.dispatch({type: 'ADD'});
            this.logger();
        },
        subtract: function() {
            this.props.dispatch({type: 'SUBTRACT'});
            this.logger();
        },
        logger: function() {
            console.log('props: ', this.props);
        },
        render: function() {
            var storeState = this.props.storeState;
            var $addb = h('button', {onClick: this.add, key: 'add-btn'}, 'Add');
            var $subb = h('button', {onClick: this.subtract, key: 'sub-btn'}, 'Subtract');
            var $h3 = h('h3', {key: 'display'}, 'Count: ' + storeState.count);
            return h('div', null, [$addb, $subb, $h3]); 
        }
    }
);

//fake reducer
var initialState = {count: 0};
function counterReducer(state, action) {
    if (!state) {
        state = initialState;
    }
    if (action.type === 'ADD') {
        return {count: state.count + 1};
    } else if (action.type === 'SUBTRACT') {
        return {count: state.count - 1};
    } else {
        return state;
    }

}

var store = createStore(counterReducer);

var ConnectedCounter = h(Provider, {store: store, children: [Counter]});

module.exports = function() {
    return ConnectedCounter;
};
