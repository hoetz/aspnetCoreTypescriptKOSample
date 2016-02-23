import CreatePersonViewModel = require('createPersonViewModel');
import $ = require('jquery');

class StorePersonCommand {

    public store = (data: CreatePersonViewModel) => {

        $.ajax({
            type: "POST",
            url: "/Home/Create",
            dataType:"json",
            contentType : 'application/json',
            data: JSON.stringify(data.toJsonModel()),
            success: function(result) {
                if (result)
                    alert("Item created: " + result.key);
            }
        });
    }

}
export = StorePersonCommand;