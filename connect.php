<?php

$server ="localhost";
$username = "root";
$password = "";
$dbName = "test1";

$from = $_POST['from'];
 $destination = $_POST['destination'];
 $travelDate = $_POST['travelDate'];
 $adults = $_POST['adults'];
 $children = $_POST['children'];

 // datatbase connection
 $conn = new mysqli ('localhost','root','','test1');
 if( $connect->connect_error){
    die('connection Failed :' .$conn->connect_error);
    
 }
    else{
        $stmt = $conn ->prepare("insert into registration(from,destination,travelDate,sdults,children) values(?,?,?,?,?)");
        $stmt ->bind_param("ssiii",$from, $destination, $travelDate, $travelDate, $children);
        $stmt -> execute();
        echo "registration successfull";
        $stmt->close();
        $conn->close();

    }
echo " hi this my file";
?>