/// <reference path="../extdefinitions/tsd.d.ts" />
define(["require", "exports", 'knockout', 'storePersonCommand'], function (require, exports, ko, StorePerson) {
    var CreatePersonViewModel = (function () {
        function CreatePersonViewModel(firstName, lastName, age) {
            var _this = this;
            this.saveUser = function () {
                var mystore = new StorePerson();
                mystore.Execute(_this, _this.saveUserCompleted, _this.saveUserOnError);
            };
            this.saveUserCompleted = function (generatedKey) {
                if (generatedKey)
                    alert('User created: ' + generatedKey);
                else
                    alert('Error creating user');
            };
            this.saveUserOnError = function (errorMessage) {
                alert('An error has occured: ' + errorMessage);
            };
            this.toJsonModel = function () {
                return { firstName: _this.firstName(), lastName: _this.lastName(), age: _this.age() };
            };
            this.firstName = ko.observable(firstName);
            this.lastName = ko.observable(lastName);
            this.age = ko.observable(age);
        }
        return CreatePersonViewModel;
    })();
    return CreatePersonViewModel;
});
