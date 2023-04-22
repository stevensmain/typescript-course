var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        User.prototype.getName = function () {
            return this.name;
        };
        return User;
    }());
    DatabaseEntity.User = User;
})(DatabaseEntity || (DatabaseEntity = {}));
/// <reference path="namespaces.ts" />
var userName = new DatabaseEntity.User("Luis");
console.log(userName.getName());
