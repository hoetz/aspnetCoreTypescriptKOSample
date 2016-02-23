import CreatePersonViewModel = require('createPersonViewModel');
declare class StorePersonCommand {
    Execute: (data: CreatePersonViewModel, callback: (createdId: string) => any, onError: (errorMessage: string) => any) => void;
}
export = StorePersonCommand;
