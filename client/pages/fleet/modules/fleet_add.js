Template.fleet_add.rendered = function(){
    timer();
};

var count = 0;

var timer = function(){
    count = 0;

    Meteor.call("fleet.add.generate", function(err, data){
        if(err){

        }else{
            console.log(data);

            interval(function(){
                // Code block goes here
                //console.log("interval");

                count++;
                if(count >= 20){
                    timer();
                    console.log("finished")
                }else{
                    //check if linked
                }

            }, 1000, 20);
        }
    });
}

Template.fleet_add.helpers({
    'token':function(){
        return _RuntimeTokens.findOne().token;
    }
});

Template.fleet_add.events({

});


function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};