<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

require 'init.php';
$user_id = $_GET['user_id'];

$sql = "SELECT * FROM `cart` WHERE `user_id`='$user_id'";
$qry = mysqli_query($con, $sql);

echo json_encode(array('items' => mysqli_num_rows($qry)));

?>