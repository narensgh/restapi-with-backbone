<?php
namespace Front\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class MessageController extends AbstractActionController
{
	
	function __construct() 
	{
	
	}
	public function indexAction()
	{
		return new ViewModel();
	}
}

?>