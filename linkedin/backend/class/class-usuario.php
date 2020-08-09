<?php
    class Usuario{
        private $name;
        private $lastname;
        private $email;
        private $password;
        private $pais;
        private $codigoPostal;
        private $region;
        private $cargo;
        private $empresa;


        public function __construct(
            $name,
            $lastname,
            $email,
            $password,
            $pais,
            $codigoPostal,
            $region,
            $cargo,
            $empresa
        ){
            $this->name = $name;
            $this->lastname = $lastname;
            $this->email = $email;
            $this->password = $password;
            $this->pais = $pais;
            $this->codigoPostal = $codigoPostal;
            $this->region = $region;
            $this->cargo = $cargo;
            $this->empresa = $empresa;
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
         * Get the value of pais
         */ 
        public function getPais()
        {
                return $this->pais;
        }

        /**
         * Set the value of pais
         *
         * @return  self
         */ 
        public function setPais($pais)
        {
                $this->pais = $pais;

                return $this;
        }

        /**
         * Get the value of codigoPostal
         */ 
        public function getCodigoPostal()
        {
                return $this->codigoPostal;
        }

        /**
         * Set the value of codigoPostal
         *
         * @return  self
         */ 
        public function setCodigoPostal($codigoPostal)
        {
                $this->codigoPostal = $codigoPostal;

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
         * Get the value of cargo
         */ 
        public function getCargo()
        {
                return $this->cargo;
        }

        /**
         * Set the value of cargo
         *
         * @return  self
         */ 
        public function setCargo($cargo)
        {
                $this->cargo = $cargo;

                return $this;
        }

        /**
         * Get the value of empresa
         */ 
        public function getEmpresa()
        {
                return $this->empresa;
        }

        /**
         * Set the value of empresa
         *
         * @return  self
         */ 
        public function setEmpresa($empresa)
        {
                $this->empresa = $empresa;

                return $this;
        }
    }

?>