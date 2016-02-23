import CreatePersonViewModel = require('createPersonViewModel');
import $ = require('jquery');

class StorePersonCommand {

    public Execute = (
        data: CreatePersonViewModel,
        callback:(createdId:string)=>any,
        onError:(errorMessage:string)=>any
        ) => {

        $.ajax({
            type: "POST",
            url: "/Home/Create",
            dataType:"json",
            contentType : 'application/json',
            data: JSON.stringify(data.toJsonModel()),
            success: function(result) {
                if (result)
                    callback(result.key);
                else
                    callback(null);
            },
            error:function (jqXHR,textStatus,errorThrown) {
                onError(errorThrown );
            }
        });
    }

}
export = StorePersonCommand;