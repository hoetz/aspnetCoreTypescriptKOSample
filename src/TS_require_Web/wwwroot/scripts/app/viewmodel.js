/// <reference path="../extdefinitions/tsd.d.ts" />
define(["require", "exports", 'knockout'], function (require, exports, ko) {
    var CreatePersonViewModel = (function () {
        function CreatePersonViewModel(firstName, lastName, age) {
            var _this = this;
            this.saveUser = function () {
                alert(_this.firstName() + ' ' + _this.lastName() + ' saved!');
            };
            this.firstName = ko.observable(firstName);
            this.lastName = ko.observable(lastName);
            this.age = ko.observable(age);
        }
        return CreatePersonViewModel;
    })();
    return CreatePersonViewModel;
});
