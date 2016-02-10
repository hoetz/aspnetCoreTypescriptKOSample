/// <reference path="../extdefinitions/tsd.d.ts" />
/// <reference path="../definitions/viewmodel.d.ts" />
define(["require", "exports", 'knockout', 'jquery', 'viewmodel'], function (require, exports, ko, $, Person) {
    var Main = (function () {
        function Main() {
            this.runString = 'hello from flo2';
            $(document).ready(function () {
                //Instantiate page view model
                var vm = new Person("Flo", "Hötzinger", 12);
                ko.applyBindings(vm);
            });
        }
        Main.prototype.run = function () {
        };
        return Main;
    })();
    return Main;
});
