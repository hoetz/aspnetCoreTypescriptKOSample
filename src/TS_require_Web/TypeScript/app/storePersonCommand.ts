import CreatePersonViewModel = require('createPersonViewModel');

class StorePersonCommand  { 
    
    public store = (data:CreatePersonViewModel)=>
    {
      alert(data.firstName()+' '+data.lastName()+' saved!');
    } 
     
}
export = StorePersonCommand;