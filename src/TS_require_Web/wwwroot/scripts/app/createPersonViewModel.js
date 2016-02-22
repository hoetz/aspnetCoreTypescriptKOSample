/// <reference path="../extdefinitions/tsd.d.ts" />
define(["require", "exports", 'knockout', 'storePersonCommand'], function (require, exports, ko, store) {
    var CreatePersonViewModel = (function () {
        function CreatePersonViewModel(firstName, lastName, age) {
            var _this = this;
            this.saveUser = function () {
                var mystore = new store();
                mystore.store(_this);
            };
            this.firstName = ko.observable(firstName);
            this.lastName = ko.observable(lastName);
            this.age = ko.observable(age);
        }
        return CreatePersonViewModel;
    })();
    return CreatePersonViewModel;
});