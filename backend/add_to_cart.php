<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Method: PUT, GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'init.php';

$uid = $_POST["uid"];
$item_id = $_POST["item_id"];
$quantity = $_POST["quantity"];

date_default_timezone_set("Asia/Calcutta");
$time = date("H:i:s Y-m-d"); 

$sql = "INSERT INTO `cart`(`user_id`, `item_id`, `quantity`, `time`) VALUES ('$uid','$item_id','$quantity','$time')";
$qry = mysqli_query($con, $sql);

if ($qry) {
	echo json_encode(array('status' => 'done'));
}else{
	echo json_encode(array('status' => 'error'));
}

?>