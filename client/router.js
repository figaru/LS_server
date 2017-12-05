authRoutes = ['dashboard'];
nonAuthRoutes = ['login'];


AppController = RouteController.extend({
    layoutTemplate: 'layout',
    loadingTemplate: "loading",
    onBeforeAction: function () {
        // do some login checks or other custom logic
        if(!Meteor.user() && !Meteor.loggingIn()){
            this.redirect("login");
        }else{
            //Session.set("access", true);
        }

        this.next();
    }
});

Router.configure({
    // this will be the default controller
    controller: 'AppController'
});
  

Router.route('/', {
    name: "home",
    waitOn: function(){
        var subs = [
            //Meteor.subscribe("")
        ];
        
        return;
    },
    action: function(){
        this.render('team');
    }
});

/* Router.route('/', {
    name: "locationMapping",
    waitOn: function(){
        var subs = [
            //Meteor.subscribe("")
        ];
        
        return;
    },
    action: function(){
        this.render('locationMapping');
    }
}); */


Router.route('/login', {
    name: "login",
    layoutTemplate: "publicLayout",
    waitOn: function(){
        var subs = [
            //Meteor.subscribe("")
        ];
        
        return;
    },
    action: function(){
        this.render('login');
    }
});