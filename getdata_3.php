<?php
require "bd_data.php";

$need = $_GET['fneed'];
$current = $_GET['fcurrent'];

$header2 = array();
$desc2 = array();
$img2 = array();
$data = array();

$range=0;
$range=$current+$need;

$header2 = array_slice($header,$current,$range);
$desc2 = array_slice($desc,$current,$range);
$img2 = array_slice($img,$current,$range);
	
$data['header']=$header2;
$data['desc']=$desc2;
$data['img']=$img2;

echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>