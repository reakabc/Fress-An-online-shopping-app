<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

require 'init.php';
$uid = $_GET['uid'];

$sql = "SELECT * FROM `orders` WHERE `item_id` IN (SELECT `item_id` FROM `items` WHERE `uid` = '$uid')";
$qry = mysqli_query($con, $sql);

$response = array();

while($items = mysqli_fetch_assoc($qry)){

	$id = $items['item_id'];

	$sql2 = "SELECT * FROM `items` WHERE `item_id`='$id'";
	$qry2 = mysqli_query($con, $sql2);
	$item = mysqli_fetch_assoc($qry2);


	array_push($response,array('id'=>$items['order_id'], 'item_id'=>$items['item_id'], 'title'=>$item['title'], 'desc'=>$item['highlights'], 'rate'=>$item['rate'], 'price'=>$item['price'], 'type'=>$item['type'], 'img'=>$item['image'], 'quantity'=>$items['quantity'], 'address'=>$items['address'], 'order_time'=>$items['order_time'], 'delivery'=>$items['delivery_time'], 'status'=>$items['order_status']));


}

echo json_encode($response);

?>