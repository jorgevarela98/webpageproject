<?php

    class Post{
        private $postContent;
        private $imagen;
        private $video;
        private $reactions;
        private $postCode;
        private $userCode;

        public function __construct(
                $postContent,
                $imagen,
                $video,
                $reactions,
                $postCode,
                $userCode
        ){
                $this->postContent = $postContent;
                $this->imagen = $imagen;
                $this->video = $video;
                $this->reactions = $reactions;
                $this->postCode = $postCode;
                $this->userCode = $userCode;
        }

        /**
         * Get the value of postContent
         */ 
        public function getPostContent()
        {
                return $this->postContent;
        }

        /**
         * Set the value of postContent
         *
         * @return  self
         */ 
        public function setPostContent($postContent)
        {
                $this->postContent = $postContent;

                return $this;
        }

        /**
         * Get the value of imagen
         */ 
        public function getImagen()
        {
                return $this->imagen;
        }

        /**
         * Set the value of imagen
         *
         * @return  self
         */ 
        public function setImagen($imagen)
        {
                $this->imagen = $imagen;

                return $this;
        }

        /**
         * Get the value of video
         */ 
        public function getVideo()
        {
                return $this->video;
        }

        /**
         * Set the value of video
         *
         * @return  self
         */ 
        public function setVideo($video)
        {
                $this->video = $video;

                return $this;
        }

        /**
         * Get the value of reactions
         */ 
        public function getReactions()
        {
                return $this->reactions;
        }

        /**
         * Set the value of reactions
         *
         * @return  self
         */ 
        public function setReactions($reactions)
        {
                $this->reactions = $reactions;

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
    }

    
?>