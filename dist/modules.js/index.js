"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_module_1 = require("./utils.module");
var myUser = {
    id: (0, utils_module_1.generateId)(),
    name: "Alejandro",
};
var sayHello = function (name) {
    console.log("Hola, ".concat(name));
};
sayHello(myUser.name);
