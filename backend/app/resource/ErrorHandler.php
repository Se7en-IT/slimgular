<?php

return function ($c) {
	return function($request, $response, $ex) use ($c){
		$c->logger->addError($ex);
		return $response->withJson([
			"data" => $ex->getMessage()
		], 500);
	};
};
