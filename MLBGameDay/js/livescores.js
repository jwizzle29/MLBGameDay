/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
CreateTable();
readData();

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
    //console.log(rdata);
    //length = rdata.length
    //for(var i = 0; i <= (length - 1); i++){
    //    console.log(rdata[i]);
    //}
    //$("#data").html(rdata);
    ClearTable();
    FillTable(rdata);
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
    tableHeaders[6] = {"Name" : "inning status", "class" : ""};
    
    var wrapper = document.querySelector(".data");
    var tr = document.createElement('tr'); 
    for(var i = 0; i <= 6; i++){
        var th = document.createElement('th');
        var k = document.createTextNode(tableHeaders[i]['Name']);
        th.appendChild(k);
        tr.appendChild(th);
    }
    tbl.setAttribute("id", "mlb-data-table");
    tbl.setAttribute("class", "table-striped");
    tbl.appendChild(tr);
    wrapper.appendChild(tbl);
}

function FillTable(list){
    CreateTable();
    console.log(list.length);
    
    var length = list.length;
    var tbl  = document.querySelector('#mlb-data-table');
    var tableValues = {};
    tableValues[0] = {"Name" : "home_team_name", "class" : "hidden"};
    tableValues[1] = {"Name" : "away_team_name", "class" : "hidden"};
    tableValues[2] = {"Name" : "game_status", "class" : "hidden"};
    tableValues[3] = {"Name" : "balls", "class" : "hidden"};
    tableValues[4] = {"Name" : "strikes", "class" : ""};
    tableValues[5] = {"Name" : "inning_state", "class" : ""};
    tableValues[6] = {"Name" : "inning_status", "class" : ""};
    tableValues[7] = {"Name" : "innings", "class" : ""};
    
    var tds = {};
    tds[0] = {"Name" : "", "class" : "altec-form-control"};

    for(var i = 0; i <= (length - 1); i++){
        var tr = tbl.insertRow();
        for(var x = 0; x <= 6; x++){
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
                input.setAttribute("id", list.game_status);
                input.onblur = update;
                input.setAttribute("Value", list[i][tableValues[x].Name]);
                input.setAttribute("class", tds[0].class);
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
    
    


