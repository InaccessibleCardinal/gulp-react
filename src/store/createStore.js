module.exports = function(reducer) {
    var state, listeners;
    function getState() {
        return state;
    }
    function subscribe(f) {
        listeners.push(f);
    }
    function dispatch(action) {
        if (!action.type) {
            throw new Error('An action must have a type.');
        }
        var l = listeners.length;
        state = reducer(action, state);
        for (var i = 0; i < length; ++i) {
            listeners[i]();
        }
    }

    dispatch({type: '@@RANDOM'});
    
    return {
        getState,
        subscribe,
        dispatch
    };
}