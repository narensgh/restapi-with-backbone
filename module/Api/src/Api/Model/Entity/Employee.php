<?php

namespace Api\Model\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Employee
 *
 * @ORM\Table(name="employee")
 * @ORM\Entity
 */
class Employee
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=250, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="gender", type="string", nullable=false)
     */
    private $gender;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=250, nullable=false)
     */
    private $address;

    /**
     * @var string
     *
     * @ORM\Column(name="picture", type="string", length=250, nullable=false)
     */
    private $picture;

    /**
     * @var string
     *
     * @ORM\Column(name="designation", type="string", length=250, nullable=false)
     */
    private $designation;

    /**
     * @var string
     *
     * @ORM\Column(name="contact", type="string", length=20, nullable=false)
     */
    private $contact;

    /**
     * @var \Api\Model\Entity\Login
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Api\Model\Entity\Login")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id", referencedColumnName="id")
     * })
     */
    private $id;



    /**
     * Set name
     *
     * @param string $name
     * @return Employee
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set gender
     *
     * @param string $gender
     * @return Employee
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender
     *
     * @return string 
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set address
     *
     * @param string $address
     * @return Employee
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string 
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set picture
     *
     * @param string $picture
     * @return Employee
     */
    public function setPicture($picture)
    {
        $this->picture = $picture;

        return $this;
    }

    /**
     * Get picture
     *
     * @return string 
     */
    public function getPicture()
    {
        return $this->picture;
    }

    /**
     * Set designation
     *
     * @param string $designation
     * @return Employee
     */
    public function setDesignation($designation)
    {
        $this->designation = $designation;

        return $this;
    }

    /**
     * Get designation
     *
     * @return string 
     */
    public function getDesignation()
    {
        return $this->designation;
    }

    /**
     * Set contact
     *
     * @param string $contact
     * @return Employee
     */
    public function setContact($contact)
    {
        $this->contact = $contact;

        return $this;
    }

    /**
     * Get contact
     *
     * @return string 
     */
    public function getContact()
    {
        return $this->contact;
    }

    /**
     * Set id
     *
     * @param \Api\Model\Entity\Login $id
     * @return Employee
     */
    public function setId(\Api\Model\Entity\Login $id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get id
     *
     * @return \Api\Model\Entity\Login 
     */
    public function getId()
    {
        return $this->id;
    }
}
