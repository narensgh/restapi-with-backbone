<?php

namespace Api\Model\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Track
 *
 * @ORM\Table(name="track")
 * @ORM\Entity
 */
class Track
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id = '0';

    /**
     * @var string
     *
     * @ORM\Column(name="track_name", type="string", length=3000, nullable=true)
     */
    private $trackName;

    /**
     * @var integer
     *
     * @ORM\Column(name="upc", type="bigint", nullable=true)
     */
    private $upc;

    /**
     * @var boolean
     *
     * @ORM\Column(name="cd", type="boolean", nullable=true)
     */
    private $cd;

    /**
     * @var integer
     *
     * @ORM\Column(name="track_id", type="smallint", nullable=true)
     */
    private $trackId;

    /**
     * @var integer
     *
     * @ORM\Column(name="length_seconds", type="smallint", nullable=true)
     */
    private $lengthSeconds;

    /**
     * @var string
     *
     * @ORM\Column(name="writer", type="string", length=765, nullable=true)
     */
    private $writer;

    /**
     * @var string
     *
     * @ORM\Column(name="publisher", type="string", length=150, nullable=true)
     */
    private $publisher;

    /**
     * @var string
     *
     * @ORM\Column(name="p_line", type="string", length=765, nullable=true)
     */
    private $pLine;

    /**
     * @var string
     *
     * @ORM\Column(name="royalty_collection", type="string", length=3, nullable=true)
     */
    private $royaltyCollection;

    /**
     * @var string
     *
     * @ORM\Column(name="mp3_url", type="string", length=765, nullable=true)
     */
    private $mp3Url;

    /**
     * @var integer
     *
     * @ORM\Column(name="release_id", type="integer", nullable=true)
     */
    private $releaseId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="last_updated", type="datetime", nullable=false)
     */
    private $lastUpdated = 'CURRENT_TIMESTAMP';



    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set trackName
     *
     * @param string $trackName
     * @return Track
     */
    public function setTrackName($trackName)
    {
        $this->trackName = $trackName;

        return $this;
    }

    /**
     * Get trackName
     *
     * @return string 
     */
    public function getTrackName()
    {
        return $this->trackName;
    }

    /**
     * Set upc
     *
     * @param integer $upc
     * @return Track
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
     * Set cd
     *
     * @param boolean $cd
     * @return Track
     */
    public function setCd($cd)
    {
        $this->cd = $cd;

        return $this;
    }

    /**
     * Get cd
     *
     * @return boolean 
     */
    public function getCd()
    {
        return $this->cd;
    }

    /**
     * Set trackId
     *
     * @param integer $trackId
     * @return Track
     */
    public function setTrackId($trackId)
    {
        $this->trackId = $trackId;

        return $this;
    }

    /**
     * Get trackId
     *
     * @return integer 
     */
    public function getTrackId()
    {
        return $this->trackId;
    }

    /**
     * Set lengthSeconds
     *
     * @param integer $lengthSeconds
     * @return Track
     */
    public function setLengthSeconds($lengthSeconds)
    {
        $this->lengthSeconds = $lengthSeconds;

        return $this;
    }

    /**
     * Get lengthSeconds
     *
     * @return integer 
     */
    public function getLengthSeconds()
    {
        return $this->lengthSeconds;
    }

    /**
     * Set writer
     *
     * @param string $writer
     * @return Track
     */
    public function setWriter($writer)
    {
        $this->writer = $writer;

        return $this;
    }

    /**
     * Get writer
     *
     * @return string 
     */
    public function getWriter()
    {
        return $this->writer;
    }

    /**
     * Set publisher
     *
     * @param string $publisher
     * @return Track
     */
    public function setPublisher($publisher)
    {
        $this->publisher = $publisher;

        return $this;
    }

    /**
     * Get publisher
     *
     * @return string 
     */
    public function getPublisher()
    {
        return $this->publisher;
    }

    /**
     * Set pLine
     *
     * @param string $pLine
     * @return Track
     */
    public function setPLine($pLine)
    {
        $this->pLine = $pLine;

        return $this;
    }

    /**
     * Get pLine
     *
     * @return string 
     */
    public function getPLine()
    {
        return $this->pLine;
    }

    /**
     * Set royaltyCollection
     *
     * @param string $royaltyCollection
     * @return Track
     */
    public function setRoyaltyCollection($royaltyCollection)
    {
        $this->royaltyCollection = $royaltyCollection;

        return $this;
    }

    /**
     * Get royaltyCollection
     *
     * @return string 
     */
    public function getRoyaltyCollection()
    {
        return $this->royaltyCollection;
    }

    /**
     * Set mp3Url
     *
     * @param string $mp3Url
     * @return Track
     */
    public function setMp3Url($mp3Url)
    {
        $this->mp3Url = $mp3Url;

        return $this;
    }

    /**
     * Get mp3Url
     *
     * @return string 
     */
    public function getMp3Url()
    {
        return $this->mp3Url;
    }

    /**
     * Set releaseId
     *
     * @param integer $releaseId
     * @return Track
     */
    public function setReleaseId($releaseId)
    {
        $this->releaseId = $releaseId;

        return $this;
    }

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
     * Set lastUpdated
     *
     * @param \DateTime $lastUpdated
     * @return Track
     */
    public function setLastUpdated($lastUpdated)
    {
        $this->lastUpdated = $lastUpdated;

        return $this;
    }

    /**
     * Get lastUpdated
     *
     * @return \DateTime 
     */
    public function getLastUpdated()
    {
        return $this->lastUpdated;
    }
}
