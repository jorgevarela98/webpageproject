<?php
    header("ContentType: application/json");
    include_once('../class/class-usuario.php');
    $_POST = json_decode(file_get_contents("php://input"),true);

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Agregar un nuevo usuario
        break;
        case 'GET':
            //Obtener usuario
        break;
        case 'PUT':
            //actualizar un usuario
        break;
        case 'DELETE':
            //borrar algun usuario
        break;
    }

?>