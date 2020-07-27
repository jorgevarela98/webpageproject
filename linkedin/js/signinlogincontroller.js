var usuarios = [];

var localStorage = window.localStorage;

if(localStorage.getItem('usuarios') == null){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}


function userRegister(){
    if(validateField('email', 'password') == true){
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        console.log(email,password);
        document.getElementById('cardbody').classList.add('hidedisplay');
        document.getElementById('cardbody2').classList.remove('hidedisplay');
        document.getElementById('cardbody2').classList.add('showdisplay');
        if(uservalidateField('name', 'apellidos') == true){
            var names = document.getElementById('name').value;
            var lastnames = document.getElementById('apellidos').value;
            console.log(names,lastnames);
            loginfields(names);
            return true;
        }
        
    }
    
}

    function validateField(idEmail,idPassword){
        if((document.getElementById(idEmail).value == '') || (document.getElementById(idPassword).value == '')){
            document.getElementById(idEmail).classList.add('input-err');
            document.getElementById(idEmail).classList.remove('input-success');
            document.getElementById(idPassword).classList.add('input-err');
            document.getElementById(idPassword).classList.remove('input-success');
            return false;
        }else{
            document.getElementById(idEmail).classList.add('input-success');
            document.getElementById(idEmail).classList.remove('input-err');
            document.getElementById(idPassword).classList.remove('input-err');
            document.getElementById(idPassword).classList.add('input-success');
            return true;
        }
    }

    function uservalidateField(idName, idApellidos){
        if(document.getElementById(idName).value == '' || document.getElementById(idApellidos).value == ''){
            document.getElementById(idName).classList.add('input-err');
            document.getElementById(idName).classList.remove('input-success');
            document.getElementById(idApellidos).classList.add('input-err');
            document.getElementById(idApellidos).classList.remove('input-success');
            return false;
        }else{
            document.getElementById(idName).classList.add('input-success');
            document.getElementById(idName).classList.remove('input-err');
            document.getElementById(idApellidos).classList.remove('input-err');
            document.getElementById(idApellidos).classList.add('input-success');
            return true;
        }
    }
/*
function loginfields(name){
    document.getElementById('loginform').innerHTML='';
    if(userRegister()==true){
        document.getElementById('loginform').innerHTML+=`
        <h5>¡Te damos la bienvenida, ${name}!</h5>
                <p style="color: #00000080;">¿Te vas a perder tu siguiente gran oportunidad? Inicia sesión para estar al día de tu entorno profesional.</p>
                <div>
                    <div class="mb-3 mt-5">
                        <input class="inputlogin logininput-dimension" type="text" placeholder="Correo electrónico o teléfono"><br>
                    </div>
                    <div>
                        <input class="inputlogin logininput-dimension" type="password" placeholder="Contraseña">
                    </div>
                    <div class="mt-4">
                        <button class="loginbtn-style">Iniciar sesión</button>
                    </div>
                    <div class="mt-4">
                        <a href="" class="lostpass-btn">¿Has olvidado tu contraseña?</a>
                        <p>¿Eres nuevo en LinkedIn? <a href="signin.html" style="color: #0073b0;">Únete ahora</a></p>
                    </div>
                </div>
        `;
    }else{
        document.getElementById('loginform').innerHTML=`
        <h5>¡Te damos la bienvenida de nuevo!</h5>
                <p style="color: #00000080;">¿Te vas a perder tu siguiente gran oportunidad? Inicia sesión para estar al día de tu entorno profesional.</p>
                <div>
                    <div class="mb-3 mt-5">
                        <input class="inputlogin logininput-dimension" type="text" placeholder="Correo electrónico o teléfono"><br>
                    </div>
                    <div>
                        <input class="inputlogin logininput-dimension" type="password" placeholder="Contraseña">
                    </div>
                    <div class="mt-4">
                        <button class="loginbtn-style">Iniciar sesión</button>
                    </div>
                    <div class="mt-4">
                        <a href="" class="lostpass-btn">¿Has olvidado tu contraseña?</a>
                        <p>¿Eres nuevo en LinkedIn? <a href="signin.html" style="color: #0073b0;">Únete ahora</a></p>
                    </div>
                </div>
        `;
        
    }
}*/
userRegister();