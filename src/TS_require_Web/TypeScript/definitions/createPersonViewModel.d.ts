/// <reference path="../extdefinitions/tsd.d.ts" />
declare class CreatePersonViewModel {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    age: KnockoutObservable<number>;
    constructor(firstName: string, lastName: string, age: number);
    saveUser: () => void;
    toJsonModel: () => {
        firstName: string;
        lastName: string;
        age: number;
    };
}
export = CreatePersonViewModel;
