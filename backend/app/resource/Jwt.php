<?php

return function ($c){
	return new JwtService(getenv("JWT_SECRET_KEY"));
};
