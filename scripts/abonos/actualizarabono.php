<?php
Header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "id6833158_gmorentin";
$password = "123456";
$dbname = "id6833158_prueba";

$idabono=$_GET["idabono"];
$cantidad=$_GET["cantidad"];
$idventa=$_GET["idventa"];
$idusuario=$_GET["idusuario"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE abonos SET cantidad='$cantidad', idventa='$idventa', fotografia='' , idusuario='$idusuario' WHERE idabono=$idabono";

if ($conn->query($sql) === TRUE) {
    echo '{"status":"ok"}';
} else {
   echo '{"status":"error"}';
}
$conn->close();
 ?>