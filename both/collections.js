_RuntimeTokens = new Mongo.Collection("_runtimeTokens");

if(Meteor.isServer){
    const rawCollection = _RuntimeTokens.rawCollection();
    const ensureIndex = Meteor.wrapAsync(rawCollection.createIndex, rawCollection);
    ensureIndex({ time: 1 }, { expireAfterSeconds: 10 });
}
