<?PHP
session_start();
function get_merchant_json_data() {
    $test = exec("curl -s https://apisandbox.dev.clover.com/v3/merchants/".$_SESSION["merch"]."/address --header 'Authorization:Bearer ".$_SESSION["token"]."'");
return $test;
}

function get_name_json_data() {
    $test = exec("curl -s https://apisandbox.dev.clover.com/v3/merchants/".$_SESSION["merch"]."/ --header 'Authorization:Bearer ".$_SESSION["token"]."'");
return $test;
}
?>
