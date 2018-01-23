<?PHP
function get_token($CODE) {
	$CLIENT_ID = // removed due to security reasons
	$CLIENT_SECRET = // removed due to security reasons
	$ENV = "https://sandbox.dev.clover.com/oauth/token";
	// if ($CODE == "") {
	// 	header("Location: https://sandbox.dev.clover.com/oauth/authorize?client_id=".$CLIENT_ID."");
	// }
	$CURL_URL = $ENV."?client_id=".$CLIENT_ID."&client_secret=".$CLIENT_SECRET."&code=".$CODE;
	$token = exec("curl '$CURL_URL'");
	$token = json_decode($token, true);
	return $token['access_token'];
	// return $token;
}
?>
