<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Method: PUT, GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'init.php';

$uid = $_POST["uid"];
$title = $_POST["title"];
$desc = $_POST["desc"];
$price = $_POST["price"];
$rate = $_POST["rate"];
$type = $_POST["type"];
$quantity = $_POST["quantity"];

$folderPath = "img/";
$file_tmp = $_FILES['file']['tmp_name'];
$file_ext = strtolower(end(explode(".", $_FILES['file']['name'])));

//$file = $folderPath . uniqid() .'.'.$file_ext;
$file = $folderPath.$title.'.'.$file_ext;
move_uploaded_file($file_tmp, $file);

$time = date("H:i:s Y-m-d");  

$sql = "INSERT INTO `items`(`uid`, `title`, `highlights`, `type`, `rate`, `price`, `image`, `quantity`, `date`) VALUES ('$uid','$title','$desc', '$type', '$rate', '$price', '$file', '$quantity', '$time')";
$qry = mysqli_query($con, $sql);

if ($qry) {
	echo json_encode('ok');
}else{
	echo json_encode('error');
}

?>