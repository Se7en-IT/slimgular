<?php

$app->post("/login", function ($request, $response)  {
	$body = $request->getParsedBody();
	$user = $body[email] && $body[password];
	if (!$user) {
		throw new Exception("Username o password errati");
	}
	#TODO cookie
	return $response->withJson([
		"token" => $this->jwt->encode([
			"user" => 1
		])
	]);
});
