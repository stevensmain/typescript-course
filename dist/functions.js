var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sayHello = function (name) {
    console.log("Hola, ".concat(name));
};
function sayGoodbye(name) {
    console.log("Adios, ".concat(name));
}
var suma = function (a, b) {
    return a + b;
};
var saveUser = function (_a) {
    var name = _a.name, user = __rest(_a, ["name"]);
    // userModel.save({name, ...user})
    console.log("User saved: ", name);
    console.log("User propertys:", __assign({}, user));
    return name;
};
var myUser = {
    id: 1,
    name: "Yosef",
    description: "He likes animals",
};
saveUser(myUser);
