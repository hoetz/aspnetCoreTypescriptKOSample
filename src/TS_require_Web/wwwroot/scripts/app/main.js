/// <reference path="../extdefinitions/tsd.d.ts" />
/// <reference path="../definitions/viewmodel.d.ts" />
define(["require", "exports", 'knockout', 'jquery', 'createPersonViewModel'], function (require, exports, ko, $, CreatePersonViewModel) {
    var Main = (function () {
        function Main() {
            $(document).ready(function () {
                //Instantiate page view model
                var vm = new CreatePersonViewModel("Flo", "Hötzinger", 12);
                ko.applyBindings(vm);
            });
        }
        return Main;
    })();
    return Main;
});
