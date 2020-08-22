<?php

    header("ContentType: application/json");
    include_once("../class/class-post.php");
    $_POST = json_decode(file_get_contents("php://input"),true);

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Agregar un nuevo post
            $post = new Post();
            $post->savePost($_POST["userCode"],$_POST["postCode"],$_POST["contentPost"],$_POST["coments"]);
        break;
        case 'GET':
            //Obtener Post
            if(isset($_GET["idPost"])){
                Post::getPost($_get["idPost"]);
            }else{
                Post::getPosts();
            }
        break;
        case 'PUT':
            //actualizar un post
        break;
        case 'DELETE':
            //borrar algun post
        break;
    }

?>