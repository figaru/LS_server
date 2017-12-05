Template.login.events({
    'submit #login-form': (event,template) =>{
        event.preventDefault();

        Meteor.loginWithPassword($('#login-email').val(), $('#login-password').val(),(err, data)=>{
            if(err){
                console.log(err);
            }else{
                Router.go("/");
            }
        });

        return false;
    }
});