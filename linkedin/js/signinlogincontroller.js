var usuario = [];
/* LOCAL STORAGE
var localStorage = window.localStorage;

if(localStorage.getItem('usuarios') == null){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}
*/

var email = '';
var password = '';
function userRegister(){
        
    if(document.getElementById('email').value == ''){
        document.getElementById('email').classList.remove('input-success');
        document.getElementById('email').classList.add('input-err');
        
        window.location.reload();
    }else{
        document.getElementById('email').classList.add('input-success');
        document.getElementById('email').classList.remove('input-err');
        email = document.getElementById('email').value;
    }
    
    if(document.getElementById('password').value=='' || document.getElementById('password').value.length <6){
        document.getElementById('password').classList.remove('input-success');
        document.getElementById('password').classList.add('input-err');
        window.location.reload();
    }else{
        document.getElementById('password').classList.add('input-success');
        document.getElementById('password').classList.remove('input-err');
        password = document.getElementById('password').value;

        document.getElementById('cardbody').classList.add('hidedisplay');
        document.getElementById('cardbody2').classList.remove('hidedisplay');
        document.getElementById('cardbody2').classList.add('showdisplay');
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
