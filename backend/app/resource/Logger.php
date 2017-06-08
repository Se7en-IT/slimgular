<?php

return function(){
	$logger = new \Monolog\Logger('logger');
	$logger->pushHandler(new \Monolog\Handler\RotatingFileHandler(APPROOT . '/log/logger.log', 10, \Monolog\Logger::ERROR));
	return $logger;
};
