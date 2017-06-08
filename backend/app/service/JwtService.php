<?php

class JwtService{

	private $secret_key;

	public function __construct($secret_key) {
		$this->secret_key = $secret_key;
	}

	public function encode($token){
		return \Firebase\JWT\JWT::encode($token, $this->secret_key);
	}

	public function decode($token){
		return \Firebase\JWT\JWT::decode($token, $this->secret_key, array("HS256", "HS512", "HS384"));
	}
}
