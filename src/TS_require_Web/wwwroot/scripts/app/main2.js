/// <reference path="../extdefinitions/tsd.d.ts" />
/// <reference path="../definitions/viewmodel.d.ts" />
define(["require", "exports", 'knockout', 'jquery', 'viewmodel'], function (require, exports, ko, $, Person) {
    var Main2 = (function () {
        function Main2() {
            $(document).ready(function () {
                //Instantiate page view model
                var vm = new Person("FloSite2", "Hötzinger", 12);
                ko.applyBindings(vm);
            });
        }
        return Main2;
    })();
    return Main2;
});
