/// <reference path="../extdefinitions/tsd.d.ts" />
declare class Person {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    age: KnockoutObservable<number>;
    constructor(firstName: string, lastName: string, age: number);
}
export = Person;
