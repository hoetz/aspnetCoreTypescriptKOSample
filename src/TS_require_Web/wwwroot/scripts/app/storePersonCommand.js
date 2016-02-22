define(["require", "exports"], function (require, exports) {
    var StorePersonCommand = (function () {
        function StorePersonCommand() {
            this.store = function (data) {
                alert(data.firstName() + ' ' + data.lastName() + ' saved!');
            };
        }
        return StorePersonCommand;
    })();
    return StorePersonCommand;
});
