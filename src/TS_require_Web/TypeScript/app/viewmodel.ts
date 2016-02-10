/// <reference path="../extdefinitions/tsd.d.ts" />

/**
 * MainViewModel
 */
import ko = require('knockout'); 

class Person  { 
    public firstName: KnockoutObservable<string>;
    public lastName:KnockoutObservable<string>;
    public age:KnockoutObservable<number>;
     
    constructor(firstName:string, lastName:string, age:number) {
        this.firstName=ko.observable(firstName);
        this.lastName=ko.observable(lastName);
        this.age=ko.observable(age);
    }     
}
export = Person;
    
 
