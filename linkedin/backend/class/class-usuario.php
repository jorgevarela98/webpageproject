<?php
        class Usuario{
                private $name;
                private $lastname;
                private $email;
                private $password;
                private $country;
                private $postalCode;
                private $region;
                private $position;
                private $business;
                private $userCode;

                public function __construct(
                        $name,
                        $lastname,
                        $email,
                        $password,
                        $country,
                        $postalCode,
                        $region,
                        $position,
                        $business,
                        $userCode
                ){
                        $this->name = $name;
                        $this->lastname = $lastname;
                        $this->email = $email;
                        $this->password = $password;
                        $this->country = $country;
                        $this->postalCode = $postalCode;
                        $this->region = $region;
                        $this->position = $position;
                        $this->business = $business;
                        $this->userCode = $userCode;
                }


                

                /**
                 * Get the value of name
                 */ 
                public function getName()
                {
                                return $this->name;
                }

                /**
                 * Set the value of name
                 *
                 * @return  self
                 */ 
                public function setName($name)
                {
                                $this->name = $name;

                                return $this;
                }

                /**
                 * Get the value of lastname
                 */ 
                public function getLastname()
                {
                                return $this->lastname;
                }

                /**
                 * Set the value of lastname
                 *
                 * @return  self
                 */ 
                public function setLastname($lastname)
                {
                                $this->lastname = $lastname;

                                return $this;
                }

                /**
                 * Get the value of email
                 */ 
                public function getEmail()
                {
                                return $this->email;
                }

                /**
                 * Set the value of email
                 *
                 * @return  self
                 */ 
                public function setEmail($email)
                {
                                $this->email = $email;

                                return $this;
                }

                /**
                 * Get the value of password
                 */ 
                public function getPassword()
                {
                                return $this->password;
                }

                /**
                 * Set the value of password
                 *
                 * @return  self
                 */ 
                public function setPassword($password)
                {
                                $this->password = $password;

                                return $this;
                }

                /**
                 * Get the value of country
                 */ 
                public function getCountry()
                {
                                return $this->country;
                }

                /**
                 * Set the value of country
                 *
                 * @return  self
                 */ 
                public function setCountry($country)
                {
                                $this->country = $country;

                                return $this;
                }

                /**
                 * Get the value of postalCode
                 */ 
                public function getPostalCode()
                {
                                return $this->postalCode;
                }

                /**
                 * Set the value of postalCode
                 *
                 * @return  self
                 */ 
                public function setPostalCode($postalCode)
                {
                                $this->postalCode = $postalCode;

                                return $this;
                }

                /**
                 * Get the value of region
                 */ 
                public function getRegion()
                {
                                return $this->region;
                }

                /**
                 * Set the value of region
                 *
                 * @return  self
                 */ 
                public function setRegion($region)
                {
                                $this->region = $region;

                                return $this;
                }

                /**
                 * Get the value of position
                 */ 
                public function getPosition()
                {
                                return $this->position;
                }

                /**
                 * Set the value of position
                 *
                 * @return  self
                 */ 
                public function setPosition($position)
                {
                                $this->position = $position;

                                return $this;
                }

                /**
                 * Get the value of business
                 */ 
                public function getBusiness()
                {
                                return $this->business;
                }

                /**
                 * Set the value of business
                 *
                 * @return  self
                 */ 
                public function setBusiness($business)
                {
                                $this->business = $business;

                                return $this;
                }

                /**
                 * Get the value of userCode
                 */ 
                public function getUserCode()
                {
                                return $this->userCode;
                }

                /**
                 * Set the value of userCode
                 *
                 * @return  self
                 */ 
                public function setUserCode($userCode)
                {
                                $this->userCode = $userCode;

                                return $this;
                }
        }

?>