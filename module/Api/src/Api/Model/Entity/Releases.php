<?php

namespace Api\Model\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Releases
 *
 * @ORM\Table(name="releases")
 * @ORM\Entity
 */
class Releases
{
    /**
     * @var integer
     *
     * @ORM\Column(name="release_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $releaseId;

    /**
     * @var integer
     *
     * @ORM\Column(name="upc", type="bigint", nullable=true)
     */
    private $upc;

    /**
     * @var string
     *
     * @ORM\Column(name="release_name", type="string", length=765, nullable=true)
     */
    private $releaseName;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="release_date", type="date", nullable=true)
     */
    private $releaseDate;

    /**
     * @var boolean
     *
     * @ORM\Column(name="genre_id", type="boolean", nullable=true)
     */
    private $genreId;

    /**
     * @var string
     *
     * @ORM\Column(name="c_line", type="string", length=765, nullable=true)
     */
    private $cLine;

    /**
     * @var string
     *
     * @ORM\Column(name="release_status", type="string", length=57, nullable=true)
     */
    private $releaseStatus;



    /**
     * Get releaseId
     *
     * @return integer 
     */
    public function getReleaseId()
    {
        return $this->releaseId;
    }

    /**
     * Set upc
     *
     * @param integer $upc
     * @return Releases
     */
    public function setUpc($upc)
    {
        $this->upc = $upc;

        return $this;
    }

    /**
     * Get upc
     *
     * @return integer 
     */
    public function getUpc()
    {
        return $this->upc;
    }

    /**
     * Set releaseName
     *
     * @param string $releaseName
     * @return Releases
     */
    public function setReleaseName($releaseName)
    {
        $this->releaseName = $releaseName;

        return $this;
    }

    /**
     * Get releaseName
     *
     * @return string 
     */
    public function getReleaseName()
    {
        return $this->releaseName;
    }

    /**
     * Set releaseDate
     *
     * @param \DateTime $releaseDate
     * @return Releases
     */
    public function setReleaseDate($releaseDate)
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    /**
     * Get releaseDate
     *
     * @return \DateTime 
     */
    public function getReleaseDate()
    {
        return $this->releaseDate;
    }

    /**
     * Set genreId
     *
     * @param boolean $genreId
     * @return Releases
     */
    public function setGenreId($genreId)
    {
        $this->genreId = $genreId;

        return $this;
    }

    /**
     * Get genreId
     *
     * @return boolean 
     */
    public function getGenreId()
    {
        return $this->genreId;
    }

    /**
     * Set cLine
     *
     * @param string $cLine
     * @return Releases
     */
    public function setCLine($cLine)
    {
        $this->cLine = $cLine;

        return $this;
    }

    /**
     * Get cLine
     *
     * @return string 
     */
    public function getCLine()
    {
        return $this->cLine;
    }

    /**
     * Set releaseStatus
     *
     * @param string $releaseStatus
     * @return Releases
     */
    public function setReleaseStatus($releaseStatus)
    {
        $this->releaseStatus = $releaseStatus;

        return $this;
    }

    /**
     * Get releaseStatus
     *
     * @return string 
     */
    public function getReleaseStatus()
    {
        return $this->releaseStatus;
    }
}
