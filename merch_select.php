<?php
	session_start();
	include 'get_token.php';
	include 'get_item_data.php';
	$CODE = $_GET['code'];
	$_SESSION["merch"] = $_GET['merchant_id'];
	$_SESSION["token"] = get_token($CODE);
?>

<head>
	<title>FoodHub</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/merch_select.css">
</head>
<body>
	<h1 style="text-align: center">Select the products you wish to add to FoodHub:</h1>
	<p id="hideme" hidden="true"><?PHP echo get_item_json_data(); ?></p>
	<div id="item_box"></div>
	<button class="btn" id="save">Update</div>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
	<script src="merch_select.js"></script>
</body>
