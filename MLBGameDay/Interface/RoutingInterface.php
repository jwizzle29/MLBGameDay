<?php
require_once('../../vendor/autoload.php');
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$func = $_POST['func'];

if($func == "navigate"){
    $route = $_POST['locationHash'];
    $router = new App\Core\Router();
    $content = $router->getContent($route);
    echo $content;
}
else if($func =="fetch"){
    $route = $_POST['route'];
    if($route == "mlb-data"){
        $apiurl = 'https://gd.mlb.com/components/game/mlb/year_2021/month_08/day_24/master_scoreboard.json';
        $mlbData = new App\Api\MLBData($apiurl);
        echo json_encode($mlbData->retrieveData());
    }
}