Template.header.events({
    'click #logout':function(event, template){
        event.preventDefault();

        Meteor.logout(function(err) {
            if(err){
                console.log(err);
            }
        });
    }
});