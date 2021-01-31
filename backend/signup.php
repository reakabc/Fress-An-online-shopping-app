<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Method: PUT, GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'init.php';

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$password = $_POST['password'];

$folderPath = "pic/";
$file_tmp = $_FILES['file']['tmp_name'];
$file_ext = strtolower(end(explode(".", $_FILES['file']['name'])));
$file = $folderPath.$mobile.'.'.$file_ext;
move_uploaded_file($file_tmp, $file);

$sql_check = "SELECT * FROM `users` WHERE `email`='$email' OR `mobile`='$mobile'";
$qry_check = mysqli_query($con, $qry_check);

if(mysqli_num_rows($qry_check)<1){

	$sql = "INSERT INTO `users`(`name`, `email`, `mobile`, `image`, `password`) VALUES ('$name', '$email', '$mobile', '$file', '$password')";
	$qry = mysqli_query($con, $sql);

	if ($qry) {

		echo json_encode('ok');

	}else{

		echo json_encode('error');

	}

}else{

	echo json_encode('exist');

}

?>