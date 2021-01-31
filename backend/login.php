<?php

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Method: PUT, GET, POST');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require 'init.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql_login = "SELECT * FROM `users` WHERE `email`='$email' AND `password`='$password'";
$qry_login = mysqli_query($con, $sql_login);

if(mysqli_num_rows($qry_login) > 0){

	$data = mysqli_fetch_assoc($qry_login);
	echo json_encode(array('uid' => $data['user_id'], 'name' => $data['name'], 'email' => $data['email'], 'mobile' => $data['mobile'], 'img' => $data['image']));

}else{

	echo json_encode("error");

}

?>