module.exports = function(url) {
    return fetch(url)
        .then(function(r) {
            return r.json();
        });
}