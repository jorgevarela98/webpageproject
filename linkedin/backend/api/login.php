<?php
    header("ContentType: application/json");
    include_once('../class/class-usuario.php');
    $_POST = json_decode(file_get_contents("php://input"),true);

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            //Verificar si el usuario existe
            $user = Usuario::verifyUser($_POST["email"],$_POST["password"]);
            if($user){
                $codigoUsuario = json_encode($user["userCode"]);
                echo '{"codigoResultado":1 ,"mensaje":"Usuario Autenticado"}';
            }else{
                echo '{"codigoResultado":0,"mensaje":"Correo/Password no existe"}';
            }
            
        break;
        
    }

?>