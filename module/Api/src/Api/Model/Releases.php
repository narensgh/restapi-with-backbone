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
	
	/**
	 *  @param $releaseId
	 *  @return array mixed
	 */
	
	public function release($releaseId = null)
	{
		$q = $this->_em->createQueryBuilder()
			->select('r')
			->from('Api\Model\Entity\Releases','r');
			if ($releaseId != null) {
				$q = $q->where ( 'r.releaseId = ?1' );
			}
			$q = $q->orderBy ( 'r.releaseId', 'DESC' );
			if ($releaseId != null) {
				$q = $q->setParameter ( 1, $releaseId );
			}
			$q = $q->getQuery ();
		return $q->getArrayResult();
	}
	
	public function delete($releaseId)
	{
		try{
			$release = $this->_em->getRepository('Api\Model\Entity\Releases')->findOneBy(array('releaseId'=>$releaseId));
			$this->_em->remove($release);
			$this->_em->flush();
			return true; 
		} catch (Exception $exception){
			return $exception;
		}
	}
	
	public function saveRelease($releaseId = null, $data)
	{
		try{
			$release = $this->_em->getRepository('Api\Model\Entity\Releases')->findOneBy(array('releaseId'=>$releaseId));
			if(empty($release)){
				$release = new Api\Model\Entity\Releases();
			}
			$release->setReleaseName($data['releaseName']);
			$release->setGenreId($data['genreId']);
			$this->_em->persist($release);
			$this->_em->flush();
			return true;
		}catch(Exception $ex){
			return $ex;
		}
	}
}

?>