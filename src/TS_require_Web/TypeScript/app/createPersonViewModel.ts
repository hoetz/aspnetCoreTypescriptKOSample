/// <reference path="../extdefinitions/tsd.d.ts" />

/**
 * MainViewModel
 */
import ko = require('knockout');
import store = require('storePersonCommand')

class CreatePersonViewModel {
    public firstName: KnockoutObservable<string>;
    public lastName: KnockoutObservable<string>;
    public age: KnockoutObservable<number>;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.age = ko.observable(age);
    }

    public saveUser = () => {
        var mystore = new store();
        mystore.store(this);
    }

    public toJsonModel = () => {
        return { firstName: this.firstName(), lastName: this.lastName(), age: this.age() };
    }

}

export = CreatePersonViewModel;
    
 
