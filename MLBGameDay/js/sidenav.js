/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function openNav() {
    document.getElementById("sidebar").style.width = "275px";
    document.getElementById("main-content").style.marginLeft = "275px";
    //document.getElementById("header-div").style.marginLeft = "275px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    $("#openbtn").hide();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
    //document.getElementById("header-div").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    $("#openbtn").show();
}

