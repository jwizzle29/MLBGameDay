/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//CreateTable();
readData();
setInterval(function(){ 
    CreateTable();
    readData();
}, 5000);

async function readData(){
    $.ajax({
        async: true,
        url: "/MLBGameDay/MLBGameDay/Interface/RoutingInterface.php",
        type : "POST",
        data : ({
            func  :"fetch",
            route : "mlb-data"
        }),
        cache : false,
        dataType : "text",
        success  : success,
        error    : fail
});
}

function success(data){
    rdata = JSON.parse(data);
    console.log(rdata);
    length = rdata.length
    //for(var i = 0; i <= length; i++){
    //    console.log(rdata[i]);
        //createBlock();
    //}
    //$("#data").html(rdata);
    ClearTable();
    FillTable(rdata);
}

function createBlock(){
    //background-color: #2B3644;
    var wrapper = document.querySelector(".data");
    var maindiv = document.createElement('div');
    var hometeamnamediv = document.createElement('div');
    var awayteamnamediv = document.createElement('div');
    var span = document.createElement('span');
    
    maindiv.appendChild(hometeamnamediv);
    maindiv.appendChild(awayteamnamediv);
    maindiv.appendChild(span);
    wrapper.appendChild(maindiv);
}

function fail(){
    console.log("failed");
}

function CreateTable(){
    var tbl  = document.createElement('table');
    var tableHeaders = {};
    tableHeaders[0] = {"Name" : "Home Team", "class" : ""};
    tableHeaders[1] = {"Name" : "Away Team", "class" : ""};
    tableHeaders[2] = {"Name" : "Game Status", "class" : ""};
    tableHeaders[3] = {"Name" : "Balls", "class" : ""};
    tableHeaders[4] = {"Name" : "Strikes", "class" : ""};
    tableHeaders[5] = {"Name" : "inning state", "class" : ""};
    //tableHeaders[6] = {"Name" : "inning status", "class" : ""};
    
    var wrapper = document.querySelector(".data");
    var tr = document.createElement('tr'); 
    for(var i = 0; i <= 5; i++){
        var th = document.createElement('th');
        var k = document.createTextNode(tableHeaders[i]['Name']);
        th.appendChild(k);
        tr.appendChild(th);
    }
    tbl.setAttribute("id", "mlb-data-table");
    tbl.setAttribute("class", "table-striped");
    tbl.setAttribute("style", "display:none");
    tbl.appendChild(tr);
    wrapper.appendChild(tbl);
}

function FillTable(list){
    CreateTable();
    console.log(list.length);
    
    var length = list.length;
    var tbl  = document.querySelector('#mlb-data-table');
    tbl.setAttribute("style", "");
    var tableValues = {};
    tableValues[0] = {"Name" : "home_team_name", "class" : "hidden"};
    tableValues[1] = {"Name" : "away_team_name", "class" : "hidden"};
    tableValues[2] = {"Name" : "game_status", "class" : "hidden"};
    tableValues[3] = {"Name" : "balls", "class" : "hidden"};
    tableValues[4] = {"Name" : "strikes", "class" : ""};
    tableValues[5] = {"Name" : "inning_state", "class" : ""};
    tableValues[6] = {"Name" : "inning_status", "class" : ""};
    tableValues[7] = {"Name" : "inning", "class" : ""};
    
    var tds = {};
    tds[0] = {"Name" : "", "class" : ""};

    for(var i = 0; i <= (length - 1); i++){
        var tr = tbl.insertRow();
        for(var x = 0; x <= 7; x++){
            if(x == 6){
                /*var td = tr.insertCell();
                var span = document.createElement('span');
                span.innerHTML = "Delete";
                span.setAttribute("onclick", "surrogateDelete(this)");
                span.setAttribute("class", "delete-span altec-form-control");
                td.appendChild(span);*/
            }else{
                var td = tr.insertCell();
                var input = document.createElement('input');
                var str = list[i].home_team_name + list[i].away_team_name;
                //input.setAttribute("id", str);
                //input.onblur = update;
                input.setAttribute("Value", list[i][tableValues[x].Name]);
                input.setAttribute("class", str);
                td.appendChild(input);
                td.setAttribute("class", tableValues[x]["class"]);
            }
        }
    }
}

function ClearTable(){
    var wrapper = document.querySelector(".data");
    wrapper.innerHTML = "";
}
    
    


