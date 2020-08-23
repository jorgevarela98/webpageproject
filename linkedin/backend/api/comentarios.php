<?php
    header("ContentType: application/json");
    include_once('../class/class-comentario.php');
    $_POST = json_decode(file_get_contents("php://input"),true);

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Agregar un nuevo usuario
            $comentarios = new Comentario(
                $_POST["userCode"],
                $_POST["postCode"],
                $_POST["commentContent"],
                $_POST["commentCode"]
            );
            $comentarios->saveComment(); 
        break;
        case 'GET':
            //Obtener usuari
        break;
        case 'PUT':
            //actualizar un usuario
        break;
        case 'DELETE':
            //borrar algun usuario
        break;
    }

?>