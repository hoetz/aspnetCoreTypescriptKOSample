define(["require", "exports", 'knockout', 'jquery'], function (require, exports, ko, $) {
    var Main = (function () {
        function Main() {
            this.runString = 'hello from flo2';
            $(document).ready(function () {
                //Instantiate page view model
                ko.applyBindings();
                alert("ready!");
            });
        }
        Main.prototype.run = function () {
        };
        Main.prototype.run2 = function () {
            alert(this.runString);
        };
        return Main;
    })();
    return Main;
});
