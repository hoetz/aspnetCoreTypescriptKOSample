import CreatePersonViewModel = require('createPersonViewModel');
declare class StorePersonCommand {
    store: (data: CreatePersonViewModel) => void;
}
export = StorePersonCommand;
