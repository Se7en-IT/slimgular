<?php

return function ($c) {
	$capsule = new \Illuminate\Database\Capsule\Manager;
	$capsule->addConnection([
		'charset'   => 'utf8',
		'collation' => 'utf8_general_ci',
		'driver'    => 'mysql',
		'host'      => getenv("DB_HOST"),
		'prefix'    => getenv("DB_PREFIX"),
		'database'  => getenv("DB_DATABASE"),
		'username'  => getenv("DB_USER"),
		'password'  => getenv("DB_PASS")
	]);
	$capsule->bootEloquent();
	$capsule->setAsGlobal();
	return $capsule;
};
