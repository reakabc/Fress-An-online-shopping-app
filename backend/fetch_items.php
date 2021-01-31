<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

require 'init.php';
$type = $_GET['type'];

$sql;

if($type == '0'){
	$sql = "SELECT * FROM `items` WHERE `quantity`>'0'";
}else{
	$sql = "SELECT * FROM `items` WHERE `quantity`>'0' AND `type` = '$type'";
}

$qry = mysqli_query($con, $sql);

$response = array();

while($items = mysqli_fetch_assoc($qry)){

	array_push($response,array('id'=>$items['item_id'], 'title'=>$items['title'], 'desc'=>$items['highlights'], 'rate'=>$items['rate'], 'price'=>$items['price'], 'type'=>$items['type'], 'img'=>$items['image']));

}

echo json_encode($response);

?>