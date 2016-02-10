/// <reference path="../extdefinitions/tsd.d.ts" />
/// <reference path="../definitions/viewmodel.d.ts" />

import ko = require('knockout');
import $ = require('jquery');
import Person = require('viewmodel');

class Main {

    constructor() {
       
        $(document).ready(function() {
            //Instantiate page view model
            var vm=new Person("Flo","Hötzinger",12);
            ko.applyBindings(vm);
        });

    }

}

export = Main;