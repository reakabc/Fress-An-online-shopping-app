<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Method: PUT, GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'init.php';

$uid = $_POST["uid"];
$name = $_POST["name"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$address = $_POST["address"];
$uid = $_POST["uid"];

$items = json_decode(stripcslashes($_POST["items"]));
$quantities = json_decode(stripcslashes($_POST["quantities"]));
$amounts = json_decode(stripcslashes($_POST["amounts"]));

date_default_timezone_set("Asia/Calcutta");
$time = date("H:i:s Y-m-d"); 

for($i = 0; $i < sizeof($items); $i++){

	$item_id = $items[$i];
	$item_quantity = $quantities[$i];
	$item_amount = $amounts[$i];

	$sql = "INSERT INTO `orders`(`user_id`, `item_id`, `quantity`, `amount`, `address`, `order_time`, `delivery_time`, `payment_status`, `order_status`) VALUES ('$uid','$item_id','$item_quantity','$item_amount','$address','$time','00:00 00-00-2021','1','Placed')";

	$qry = mysqli_query($con, $sql);

	if ($qry) {
		echo json_encode(array('status' => 'done'));
	}else{
		echo json_encode(array('status' => 'error'));
	}

}

?>