function setInheritance(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
};

function createClass(subClass, superClass, methods) {
    if (superClass) {
        setInheritance(subClass, superClass);
    } else {
        setInheritance(subClass, {});
    }
    if (methods) {
        for (var key in methods) {
            if (methods.hasOwnProperty(key)) {
                subClass.prototype[key] = methods[key];
            }
        }
    }
}

module.exports = createClass;