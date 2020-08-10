<?php
        class Mensaje{

                private $contentMessage;
                private $messageReaction;
                private $userCode;
                private $name;
                private $lastName;

                public function __construct(
                $contentMessage,
                $messageReaction,
                $userCode,
                $name,
                $lastName
                ){
                $this->contentMessage = $contentMessage;
                $this->messageReaction = $messageReaction;
                $this->userCode = $userCode;
                $this->name = $name;
                $this->lastName = $lastName;
                }


                /**
                 * Get the value of contentMessage
                 */ 
                public function getContentMessage()
                {
                        return $this->contentMessage;
                }

                /**
                 * Set the value of contentMessage
                 *
                 * @return  self
                 */ 
                public function setContentMessage($contentMessage)
                {
                        $this->contentMessage = $contentMessage;

                        return $this;
                }

                /**
                 * Get the value of messageReaction
                 */ 
                public function getMessageReaction()
                {
                        return $this->messageReaction;
                }

                /**
                 * Set the value of messageReaction
                 *
                 * @return  self
                 */ 
                public function setMessageReaction($messageReaction)
                {
                        $this->messageReaction = $messageReaction;

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
                 * Get the value of lastName
                 */ 
                public function getLastName()
                {
                        return $this->lastName;
                }

                /**
                 * Set the value of lastName
                 *
                 * @return  self
                 */ 
                public function setLastName($lastName)
                {
                        $this->lastName = $lastName;

                        return $this;
                }
        }

?>