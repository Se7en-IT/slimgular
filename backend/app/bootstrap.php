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
/*CROSS ORIGIN*/
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Token, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
/*SETUP CONTROLLER*/
foreach (glob(APPROOT . '/controller/*.php') as $router) {
  include $router;
}

return $app;
