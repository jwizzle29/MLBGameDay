<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Api;

/**
 * Description of MLBData
 *
 * @author Josh
 */
class MLBData {
    private $_url;
    function __construct($url){
        $this->_url = $url;
    }
    
    function retrieveData(){       
        $curl = curl_init($this->_url);
        curl_setopt($curl, CURLOPT_FAILONERROR, true);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);  
        $result = curl_exec($curl);
        $data = json_decode($result);

        $game_data = [];
        foreach($data->data->games->game as $game){
            $arr = [];
            $linescores = [];
            $inningCount = 1;
            foreach($game->linescore->inning as $linescore){
                $arr = [
                    "home" => $linescore->home,
                    "away" => $linescore->away
                 ];
                $linescores[$inningCount] = $arr;
                $inningCount++;
            }
            $arr = [
                "away_team_name" => $game->away_team_name,
                "home_team_name" => $game->home_team_name,
                "game_status"=> $game->status->status, 
                "balls"=> $game->status->balls, 
                "strikes" => $game->status->strikes,
                "inning_state" => $game->status->inning_state,
                "inning" => $game->status->inning,
                "innings" => $linescores
            ];
            array_push($game_data, $arr);
        }
        //example
        //echo $game_data[0]['innings'][1]['home'];
        return $game_data;
    }
}
