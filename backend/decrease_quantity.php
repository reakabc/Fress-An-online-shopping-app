<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Method: PUT, GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'init.php';

$uid = $_POST["uid"];
$item_id = $_POST["item_id"];

$sql = "UPDATE `cart` SET `quantity`=`quantity`-1 WHERE `user_id`='$uid' AND `item_id`='$item_id'";
$qry = mysqli_query($con, $sql);

if ($qry) {
	echo json_encode(array('status' => 'done'));
}else{
	echo json_encode(array('status' => 'error'));
}

?>