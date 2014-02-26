<?php
namespace Api\Service;

use Api\Model\Releases;

class ReleaseService 
{
	private $_em;
	private $_release;
	function __construct($em) 
	{
		if(!$this->_em)
		{
			$this->_em = $em;	
		}	
		$this->_release = new Releases($this->_em);
	}
	
	public function release($releaseId = null)
	{
		$releases = $this->_release->release($releaseId);
		return json_decode(json_encode($releases, true));
	}
}

?>