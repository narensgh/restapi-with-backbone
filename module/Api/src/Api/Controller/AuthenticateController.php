<?php
namespace Api\Controller;

use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

use Api\Service\AuthenticateService;

class AuthenticateController extends AbstractRestfulController
{
	private $_em;
	function __construct()
	{
	
	}
	
	/**
	 *  @param null
	 *  @return resource EntityManager
	 */
	
	protected function getEntityManager(){
		if(!$this->_em){
			$sm = $this->getServiceLocator();
			$this->_em = $sm->get('Doctrine\ORM\EntityManager');
		}
		return $this->_em;
	}
	/**
	 * Return single resource
	 *
	 * @param  mixed $id
	 * @return mixed
	 */
	public function get($id)
	{
		$data = array('username'=>'narendra','password'=>'singh');
// 		echo $id = json_encode($data);
		$authData = json_decode($id);
		$authenticateService = new AuthenticateService($authData);
		$auth = $releaseService->auth();
		return new JsonModel($release);
	}
	/**
	 * Return list of resources
	 *
	 * @return mixed
	 */
	public function getList()
	{
		$this->response->setStatusCode(405);	
		return new JsonModel( array(
				'content' => 'Method Not Allowed'
		));
	}
}

?>