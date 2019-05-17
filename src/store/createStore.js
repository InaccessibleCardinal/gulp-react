module.exports = function(reducer) {
    var state, listeners = [];
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
        state = reducer(state, action);
        listeners.forEach(function(f) {
            f();
        });
    }

    dispatch({type: '@@RANDOM'});
    
    return {
        getState,
        subscribe,
        dispatch
    };
}