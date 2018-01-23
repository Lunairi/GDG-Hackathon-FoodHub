<?PHP
session_start();
function get_item_json_data() {
    $test = exec("curl -s https://apisandbox.dev.clover.com/v3/merchants/".$_SESSION["merch"]."/items --header 'Authorization:Bearer ".$_SESSION["token"]."'");
return $test;
}
?>
