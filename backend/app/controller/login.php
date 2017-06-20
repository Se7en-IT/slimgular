<?php

$app->post("/login", function ($request, $response)  {
	$body = $request->getParsedBody();
	$user = $body[email] && $body[password];
	if (!$user) {
		throw new Exception("Username o password errati");
	}
	$token = $this->jwt->encode([
		"user" => 1,
		"email" => "luca.musolino@gmail.com"
	]);
	setcookie("token", $token, 0, "/");
	return $response->withJson([
		"token" => $token
	]);
});

$app->get("/logout", function ($request, $response)  {
	setcookie("token", "", time() - 3600, "/");
});
