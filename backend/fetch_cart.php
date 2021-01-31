<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

require 'init.php';
$user_id = $_GET['user_id'];

$sql = "SELECT * FROM `cart` WHERE `user_id`='$user_id'";
$qry = mysqli_query($con, $sql);

$response = array();

while($items = mysqli_fetch_assoc($qry)){

	$id = $items['item_id'];

	$sql2 = "SELECT * FROM `items` WHERE `item_id`='$id'";
	$qry2 = mysqli_query($con, $sql2);
	$item = mysqli_fetch_assoc($qry2);

	array_push($response,array('id'=>$items['item_id'], 'title'=>$item['title'], 'desc'=>$item['highlights'], 'rate'=>$item['rate'], 'price'=>$item['price'], 'type'=>$item['type'], 'img'=>$item['image'], 'quantity'=>$items['quantity']));

}

echo json_encode($response);

?>