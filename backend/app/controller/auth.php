<?php

$app->get("/auth/home", function ($request, $response)  {
	return $response->withJson([
		"data" => "Example"
	]);
});
