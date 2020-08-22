<?php
        class Usuario{
                private $name;
                private $lastname;
                private $email;
                private $password;
                private $locationInfo;
                private $personalInfo;
                private $userCode;

                public function __construct(
                        $name,
                        $lastname,
                        $email,
                        $password,
                        $locationInfo,
                        $personalInfo,
                        $userCode
                ){
                        $this->name = $name;
                        $this->lastname = $lastname;
                        $this->email = $email;
                        $this->password = $password;
                        $this->locationInfo = $locationInfo;
                        $this->personalInfo = $personalInfo;
                        $this->userCode = $userCode;
                }


                public function saveUser(){
                        $users[]=array(
                                "name"=>$this->name,
                                "lastname"=>$this->lastname,
                                "email"=>$this->email,
                                "password"=>$this->password,
                                "locationInfo"=>$this->locationInfo,
                                "personalInfo"=>$this->personalInfo,
                                "userCode"=>$this->userCode
                        );
                        $file = fopen('../data/usuarios.json','w');
                        fwrite($file,json_encode($users));
                        fclose($file);
                        echo '{"codigoResultado":1,"mensaje":"Usuario Guardado con exito"}';
                }

                public static function getUsers(){
                        $fileContentUsers = file_get_contents('../data/usuarios.json');
                        echo  $fileContentUsers;
                }

                public static function getUser($idUsuario){
                        $fileContentUsers = file_get_contents('../data/usuarios.json');
                        $users = json_decode($fileContentUsers,true);
                        $user = null;
                        for($i=0;$i<sizeof($users);$i++){
                                if($users[$i]["userCode"] == $idUsuario){
                                        $user = $users[$i];
                                        break;
                                }
                        }
                        echo json_encode($user);
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

                /**
                 * Get the value of locationInfo
                 */ 
                public function getLocationInfo()
                {
                                return $this->locationInfo;
                }

                /**
                 * Set the value of locationInfo
                 *
                 * @return  self
                 */ 
                public function setLocationInfo($locationInfo)
                {
                                $this->locationInfo = $locationInfo;

                                return $this;
                }

                /**
                 * Get the value of personalInfo
                 */ 
                public function getPersonalInfo()
                {
                                return $this->personalInfo;
                }

                /**
                 * Set the value of personalInfo
                 *
                 * @return  self
                 */ 
                public function setPersonalInfo($personalInfo)
                {
                                $this->personalInfo = $personalInfo;

                                return $this;
                }
        }

?>