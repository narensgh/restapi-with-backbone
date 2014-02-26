<?php
namespace Api\Model;

class Releases 
{
	/**
	 *
	 * @var Doctrine\ORM\Entitymanager
	 */
	
	private $_em;
	function __construct($em)
	{
		$this->_em = $em;
	}
	public function release($releaseId = null)
	{
		$q = $this->_em->createQueryBuilder()
			->select('r')
			->from('Api\Model\Entity\Releases','r');
			if($releaseId != null)
			{
				$q = $q->where('r.releaseId = ?1');
			}
			$q = $q->orderBy('r.releaseId','DESC');
		if($releaseId != null)
		{
			$q = $q->setParameter(1,$releaseId);
		}
		$q = $q->getQuery();
		return $q->getArrayResult();
	}
}

?>