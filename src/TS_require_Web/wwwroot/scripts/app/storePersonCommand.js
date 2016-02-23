define(["require", "exports", 'jquery'], function (require, exports, $) {
    var StorePersonCommand = (function () {
        function StorePersonCommand() {
            this.Execute = function (data, callback, onError) {
                $.ajax({
                    type: "POST",
                    url: "/Home/Create",
                    dataType: "json",
                    contentType: 'application/json',
                    data: JSON.stringify(data.toJsonModel()),
                    success: function (result) {
                        if (result)
                            callback(result.key);
                        else
                            callback(null);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        onError(errorThrown);
                    }
                });
            };
        }
        return StorePersonCommand;
    })();
    return StorePersonCommand;
});
