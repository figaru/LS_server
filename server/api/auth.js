var OAuth = Router;


OAuth.onBeforeAction(function() {

    this.next();
});
/*  
    POST ENDPOINT 
    
*/
OAuth.route('/oauth/register', {where: 'server'}).post(function () {
    let req = this.request,
        res = this.response,
        params = req.query;

    if(Object.keys(params).length === 0 && params.constructor === Object){
        params = req.body;
    }

    res.end(JSON.stringify(params));
});

OAuth.route('/oauth/authorize', {where: 'server'}).post(function () {
    let req = this.request,
        res = this.response,
        params = req.body;
    
    check(params, {
        text: String,
        timestamp: Date,
        // Optional, but if present must be an array of strings.
        tags: Match.Maybe([String])
    });

    this.response.end('post request\n');
});

/* Router.route('/api/auth', {where: 'server'})
.get(function () {

    this.response.end('get request\n');
})
.post(function () {
    this.response.end('post request\n');
}); */