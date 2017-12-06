Meteor.methods({
    'fleet.add.generate': function(){
        var uuid = Meteor.uuid();

        _RuntimeTokens.update({user: this.userId, type: "fleet_add"},
        {
            user: this.userId,
            token: uuid,
            type: "fleet_add",
            time: new Date()
        },
        {upsert:true});

        return uuid;
    }
});