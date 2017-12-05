import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  
  //Validate/create admin user -> DEV
  //Meteor.users.remove({});
  if(!Meteor.users.findOne({"username": "admin", "roles": "admin"})){
    var user = Accounts.createUser({
      username: 'admin',
      email: 'admin@admin.com',
      password: '123456',
      profile: {
          first_name: 'Daniel',
          last_name: 'Abrantes'
      }
    });

    console.log(user);
    
    Meteor.users.update({_id: user}, {
      $set: {
        roles: ["admin"]
      }
    })

  }
});
