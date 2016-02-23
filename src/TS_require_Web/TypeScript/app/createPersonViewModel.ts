/// <reference path="../extdefinitions/tsd.d.ts" />

/**
 * MainViewModel
 */
import ko = require('knockout');
import StorePerson = require('storePersonCommand')

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
        var mystore = new StorePerson();
        mystore.Execute(this,this.saveUserCompleted,this.saveUserOnError);
    }
    
    private saveUserCompleted=(generatedKey:string):void=>
    {
        if (generatedKey)
            alert('User created: '+generatedKey);
        else
            alert('Error creating user');
            
    }
    
    private saveUserOnError=(errorMessage:string):void=>
    {
         alert('An error has occured: '+errorMessage);
    }
    
    public toJsonModel = () => {
        return { firstName: this.firstName(), lastName: this.lastName(), age: this.age() };
    }

}

export = CreatePersonViewModel;
    
 
