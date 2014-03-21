<?php
namespace Api\Service;

use Api\Model\Authenticate;

class AuthenticateService 
{
	private $_em;
	private $_authenticate;
	function __construct() 
	{
		$this->_authenticate = new Authenticate();
	}
}

?>