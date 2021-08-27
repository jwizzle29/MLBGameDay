/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*var interval;
clearInterval(interval);
if(!location.hash){
    location.hash = "#login";
}*/

Navigate();

window.addEventListener("hashchange", Navigate );

function Navigate(){
    CheckIsActive(window.location.hash);
    $.ajax({
        async: true,
        url: "/MLBGameDay/MLBGameDay/Interface/RoutingInterface.php",
        type : "POST",
        data : ({
            func         :"navigate",
            locationHash : location.hash
        }),
        cache : false,
        dataType : "text",
        success  : success,
        error    : fail
    });
    
    function success(data){
        $("#main").html(data);
    }
    
    function fail(){
        console.log("failed");
    }
}

function CheckIsActive(locationHash){
    var hash = locationHash.substring(1);
    var actives = document.querySelectorAll('.active');
    for(var i = 0; i <= actives.length -1;i++){
        if(actives[i].getAttribute('href').substring(1) !== hash){
            actives[i].setAttribute('class', 'not-active');
        }
    }
    
    var inactives = document.querySelectorAll('.not-active');
    for(var x = 0; x <= inactives.length -1; x++){
        if(inactives[x].getAttribute('href').substring(1) === hash){
            inactives[x].setAttribute('class', 'active');
        }
    }
}

function update(parameters, locationhash){
    //var hash = locationHash.substring(1);
    
}
