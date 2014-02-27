<?php
namespace Api\Controller;

use Doctrine\ORM\EntityManager;

use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

use Api\Service\ReleaseService;

class ReleaseController extends AbstractRestfulController
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
		$releaseService = new ReleaseService($this->getEntityManager());
		$release = $releaseService->release($id);
		return new JsonModel(array(
			'releases' => $release
		));
	}
	
	/**
	 * Return list of resources
	 *
	 * @return mixed
	 */
	public function getList()
	{
		$releaseService = new ReleaseService($this->getEntityManager());
		$releases = $releaseService->release();
		return new JsonModel( $releases);
	}
	
	/**
	 * Delete an existing resource
	 *
	 * @param  mixed $id
	 * @return mixed
	 */
	public function delete($id)
	{
		$this->response->setStatusCode(202);
	
		return new JsonModel(  array(
				'content' => 'delete Method ' .$id
		));
	}
	
	/**
	 * Delete the entire resource collection
	 *
	 * Not marked as abstract, as that would introduce a BC break
	 * (introduced in 2.1.0); instead, raises an exception if not implemented.
	 *
	 * @return mixed
	 */
	public function deleteList()
	{
		$this->response->setStatusCode(202);
	
		return new JsonModel( array(
				'content' => 'deleteList Method'
		));
	}
	
	
}

?>