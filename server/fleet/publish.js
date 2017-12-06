Meteor.publish('fleet-token-add', function publishFunction() {
    return _RuntimeTokens.find({user: this.userId, type: "fleet_add"}); 
})