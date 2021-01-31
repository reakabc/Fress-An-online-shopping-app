<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Method: PUT, GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'init.php';

$order_id = $_GET['order_id'];

$sql = "UPDATE `orders` SET `order_status`='Cancelled' WHERE `order_id`='$order_id'";
$qry = mysqli_query($con, $sql);

if($qry){

	echo json_encode("Done");

}else{

	echo json_encode("Error");

}

?>