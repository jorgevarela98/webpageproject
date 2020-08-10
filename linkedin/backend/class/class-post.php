<?php

    class Post{
        private $postContent;
        private $imagen;
        private $video;
        private $reactions;

        public function __construct(
            $postContent,
            $imagen,
            $video,
            $reactions
        ){
            $this->postContent = $postContent;
            $this->imagen = $imagen;
            $this->video = $video;
            $this->reactions = $reactions;
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
    }

    
?>