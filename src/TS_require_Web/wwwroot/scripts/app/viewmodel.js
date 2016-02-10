/// <reference path="../extdefinitions/tsd.d.ts" />
define(["require", "exports", 'knockout'], function (require, exports, ko) {
    var Person = (function () {
        function Person(firstName, lastName, age) {
            this.firstName = ko.observable(firstName);
            this.lastName = ko.observable(lastName);
            this.age = ko.observable(age);
        }
        return Person;
    })();
    return Person;
});
