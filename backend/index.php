<?php

error_reporting(E_ALL | E_STRICT);
error_reporting(error_reporting() & ~E_NOTICE);

define('ROOT', dirname(__FILE__));
define('APPROOT', ROOT. "/app");

$app = require_once ROOT . '/app/bootstrap.php';

$app->run();
