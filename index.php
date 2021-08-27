<?php
require_once('vendor/autoload.php');
//$apiurl = 'https://gd.mlb.com/components/game/mlb/year_2021/month_08/day_24/master_scoreboard.json
//$mlbData = new App\Api\MLBData($apiurl);
//print_r($mlbData->retrieveData());
?>
<html>
    <header>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/MLBGameDay/MLBGameDay/css/dash.css">
        <script src="/MLBGameDay/MLBGameDay/js/app.js"></script>
        <script src="/MLBGameDay/MLBGameDay/js/sidenav.js"></script>
        <span id="menu-open" onclick="openNav()" style="cursor: pointer" class="openbtn">☰</span>
    </header>
    <body>
        <div id ="main-content">
            <div id="sidebar" class="sidebar" style="width:0px;">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                <a href="#livescores" class="not-active">Live Scores</a>
                <a></a>
                <a></a>
            </div>
            <div id="main">
                
            </div>
        </div>
    </body>
    <footer>
        
    </footer>
</html>

