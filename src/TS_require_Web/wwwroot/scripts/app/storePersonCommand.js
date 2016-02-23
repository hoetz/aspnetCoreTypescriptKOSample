define(["require", "exports", 'jquery'], function (require, exports, $) {
    var StorePersonCommand = (function () {
        function StorePersonCommand() {
            this.store = function (data) {
                $.ajax({
                    type: "POST",
                    url: "/Home/Create",
                    dataType: "json",
                    contentType: 'application/json',
                    data: JSON.stringify(data.toJsonModel()),
                    success: function (result) {
                        if (result)
                            alert("Item created: " + result.key);
                    }
                });
            };
        }
        return StorePersonCommand;
    })();
    return StorePersonCommand;
});
