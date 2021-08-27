<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Core;

/**
 * Description of Router
 *
 * @author Josh
 */
class Router {
    //put your code here
    function __construct(){
        
    }
    
    function getContent($route){
        if($route == "#livescores"){
            include_once('../html/Views/livescores.html');
            //return '<script src="/MLBGameDay/MLBGameDay/js/livescores.js"></script>';
        }
    }
}
