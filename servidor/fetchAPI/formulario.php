<?php
    header('Access-Control-Allow-Origin: *');
    $usr = $_POST['user'];
    $pass = $_POST['password'];   

    if($usr === '' || $pass===''){
        echo json_encode('llene todos los campos');
    }else{
        echo json_encode('Usuario:'.$usr);
    } 
?>