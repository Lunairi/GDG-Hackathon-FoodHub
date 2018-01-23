<?php
session_start();
include 'get_merchant_data.php';
$merchant = json_decode(get_merchant_json_data());
$name = json_decode(get_name_json_data(), true);
$old_json = json_decode(file_get_contents('db.json'));
$new_json = json_decode($_POST['variable']);
if ($old_json != NULL)
  $json = $old_json;
else
  $json = [];
foreach ($new_json as $key => $value)
{
  foreach ($value as $key2 => $value2) {
    $value2->address = $merchant->address1;
    $value2->zip = $merchant->zip;
    $value2->merchant = $name['name'];
    array_push($json, $value2);
  }
}
file_put_contents('db.json', json_encode($json));
echo file_get_contents('db.json');
?>
