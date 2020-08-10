<?php
    header("ContentType: application/json");
    include_once('../class/class-usuario.php');
    $_POST = json_decode(file_get_contents("php://input"),true);

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Agregar un nuevo post
        break;
        case 'GET':
            //Obtener Post
        break;
        case 'PUT':
            //actualizar un post
        break;
        case 'DELETE':
            //borrar algun post
        break;
    }

?>