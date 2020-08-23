<?php

    class Comentario{
        private $userCode;
        private $postCode;
        private $commentContent;
        private $commentCode;

        public function __construct(
            $userCode,
            $postCode,
            $commentContent,
            $commentCode
        ){
            $this->userCode = $userCode;
            $this->postCode = $postCode;
            $this->commentContent = $commentContent;
            $this->commentCode = $commentCode;
        }

        public function saveComment(){
            if(fopen('../data/comentarios.json','r') == null){
                $comments[]=array(
                        "userCode"=>$this->userCode,
                        "postCode"=>$this->postCode,
                        "commentContent"=>$this->commentContent,
                        "commentCode"=>$this->commentCode
                );
                $file = fopen('../data/comentarios.json','w');
                fwrite($file, json_encode($comments));
                fclose($file);
                echo '{"codigoResultado":1,"mensaje":"Comentario Guardado con exito"}';
            }else{
                    $fileContentComments = file_get_contents('../data/comentarios.json');
                    $comments = json_decode($fileContentComments,true);
                    $comments[]=array(
                        "userCode"=>$this->userCode,
                        "postCode"=>$this->postCode,
                        "commentContent"=>$this->commentContent,
                        "commentCode"=>$this->commentCode
                    );
                    $file = fopen('../data/comentarios.json','w');
                    fwrite($file, json_encode($comments));
                    fclose($file);
                    echo '{"codigoResultado":1,"mensaje":"Comentario Guardado con exito"}';
            }
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
         * Get the value of commentContent
         */ 
        public function getCommentContent()
        {
                return $this->commentContent;
        }

        /**
         * Set the value of commentContent
         *
         * @return  self
         */ 
        public function setCommentContent($commentContent)
        {
                $this->commentContent = $commentContent;

                return $this;
        }

        /**
         * Get the value of commentCode
         */ 
        public function getCommentCode()
        {
                return $this->commentCode;
        }

        /**
         * Set the value of commentCode
         *
         * @return  self
         */ 
        public function setCommentCode($commentCode)
        {
                $this->commentCode = $commentCode;

                return $this;
        }
    }

?>