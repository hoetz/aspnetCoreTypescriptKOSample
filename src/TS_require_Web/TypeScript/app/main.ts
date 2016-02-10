/// <reference path="../extdefinitions/tsd.d.ts" />
/// <reference path="../definitions/viewmodel.d.ts" />

import ko = require('knockout');
import $ = require('jquery');
import Person = require('viewmodel');

class Main {
    runString: string;

    constructor() {
        this.runString = 'hello from flo2';
       
        $(document).ready(function() {
            //Instantiate page view model
            var vm=new Person("Flo","Hötzinger",12);
            ko.applyBindings(vm);
        });

    }

    run() {

    }
}

export = Main;