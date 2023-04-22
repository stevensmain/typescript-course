var newObject = {
    field: 1,
};
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
// Functions example
function getData(id) {
    // implementation goes here
    //const user = await fetch(`example.com/api/users/${id}`);
    //const result = await user.json();
    //return result;
}
getData("");
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Ale",
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.deleteItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    CRUD.prototype.getItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Antonio" },
    { id: 2, name: "Julia" },
];
var usersClass = new CRUD(users);
usersClass.addItem({ id: 5, name: "Albert" });
console.log(usersClass.getItems());
