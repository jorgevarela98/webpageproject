<?php
    header("ContentType: application/json");
    include_once('../class/class-usuario.php');
    $_POST = json_decode(file_get_contents("php://input"),true);

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Agregar un nuevo usuario
            $user = new Usuario(
                $_POST["name"],
                $_POST["lastname"],
                $_POST["email"],
                sha1($_POST["password"]),
                $_POST["locationInfo"],
                $_POST["personalInfo"],
                $_POST["userCode"]
            );
            $user->saveUser();
        break;
        case 'GET':
            //Obtener usuario
            if(isset($_GET["idUsuario"])){
                Usuario::getUser($_GET["idUsuario"]);
            }else{
                Usuario::getUsers();
            }
        break;
        case 'PUT':
            //actualizar un usuario
        break;
        case 'DELETE':
            //borrar algun usuario
        break;
    }

?>