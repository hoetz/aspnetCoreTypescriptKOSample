define(["require", "exports"], function (require, exports) {
    var Main = (function () {
        function Main() {
            this.runString = 'hello from flo2';
        }
        Main.prototype.run = function () {
            alert(this.runString);
        };
        Main.prototype.run2 = function () {
            alert(this.runString);
        };
        return Main;
    })();
    return Main;
});
