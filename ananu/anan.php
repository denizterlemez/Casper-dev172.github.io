<?php
ob_start();
session_start();

if ($_SESSION['login']!==True) {
	header("location:../index.html");
	exit;
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>ANANUUUĞĞĞ</title>
</head>
<body>
<?php

echo "Ad: ".$_SESSION['name']."<br>";
echo "Mail: ".$_SESSION['mail']."<br>";
echo "Şifre: ".$_SESSION['password']."<br>";
echo "ID: ".$_SESSION['id'];

?>

<a href="logout.php"><button>ÇIKIŞ YAP</button></a>
</body>
</html>