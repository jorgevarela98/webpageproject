<?php

        class Comentario{
                private $comentCode;
                private $postCode;
                private $userCode;
                private $comentContent;

                public function __construct(
                $comentCode,
                $postCode,
                $userCode,
                $comentContent
                ){
                $this->comentCode = $comentCode;
                $this->postCode = $postCode;
                $this->userCode = $userCode;
                $this->comentContent = $comentContent;
                }

                /**
                 * Get the value of comentCode
                 */ 
                public function getComentCode()
                {
                        return $this->comentCode;
                }

                /**
                 * Set the value of comentCode
                 *
                 * @return  self
                 */ 
                public function setComentCode($comentCode)
                {
                        $this->comentCode = $comentCode;

                        return $this;
                }

                /**
                 * Get the value of postCode
                 */ 
                public function getPostCode()
                {
                        return $this->postCode;
                }

                /**
                 * Set the value of postCode
                 *
                 * @return  self
                 */ 
                public function setPostCode($postCode)
                {
                        $this->postCode = $postCode;

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
                 * Get the value of comentContent
                 */ 
                public function getComentContent()
                {
                        return $this->comentContent;
                }

                /**
                 * Set the value of comentContent
                 *
                 * @return  self
                 */ 
                public function setComentContent($comentContent)
                {
                        $this->comentContent = $comentContent;

                        return $this;
                }
        }

?>