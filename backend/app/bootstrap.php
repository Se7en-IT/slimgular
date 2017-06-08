<?php
require ROOT . '/vendor/autoload.php';

date_default_timezone_set('Europe/Rome');
setlocale(LC_TIME, "it_IT");
/*SETUP DOTENV*/
$dotenv = new Dotenv\Dotenv(ROOT);
$dotenv->load();
/*SETUP CONTAINER*/
$container = new \Slim\Container();
/*SETUP RESOURCE*/
foreach (glob(APPROOT . '/resource/*.php') as $resource) {
  $container[lcfirst(basename($resource, ".php"))] = include $resource;
}
/*SETUP SLIM*/
$app = new \Slim\App($container);
$app->add(new \Slim\Middleware\JwtAuthentication([
  "header" => "X-Token",
  "path" => "/auth",
  "secure" => false,
  "secret" => getenv("JWT_SECRET_KEY"),
  "callback" => function ($request, $response, $arguments) use ($container) {
      $container["token"] = $arguments["decoded"];
  }
]));
/*SETUP CONTROLLER*/
foreach (glob(APPROOT . '/controller/*.php') as $router) {
  include $router;
}
return $app;
