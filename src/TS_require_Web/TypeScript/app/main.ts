import ko = require('knockout');
import $ = require('jquery');

class Main {
    runString: string;

    constructor() {
        this.runString = 'hello from flo2';

        $(document).ready(function() {
            //Instantiate page view model
            ko.applyBindings(/* page view model instance */);
            alert("ready!");
        });

    }

    run() {

    }
}

export = Main;