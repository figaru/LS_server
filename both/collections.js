_RuntimeTokens = new Mongo.Collection("_runtimeTokens");

_RuntimeTokens._ensureIndex({createdAt: 1}, {expireAfterSeconds: 60*60*2}); // 2 min