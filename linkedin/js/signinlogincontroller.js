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
var name = '';
var lastname = '';
function userRegister(){
        
    if(document.getElementById('email').value == ''){
        document.getElementById('email').classList.remove('input-success');
        document.getElementById('email').classList.add('input-err');
        
        window.location.reload();
    }else{
        email = document.getElementById('email').value;
    }
    
    if(document.getElementById('password').value=='' || document.getElementById('password').value.length <6){
        document.getElementById('password').classList.remove('input-success');
        document.getElementById('password').classList.add('input-err');
        window.location.reload();
    }else{
        password = document.getElementById('password').value;

        document.getElementById('cardbody').classList.add('hidedisplay');
        document.getElementById('cardbody2').classList.remove('hidedisplay');
        document.getElementById('cardbody2').classList.add('showdisplay');
        
    }

}

function userLogIn(){
    let userLogIn;
    if(document.getElementById('name').value=='' || document.getElementById('apellidos').value == ''){
        document.getElementById('name').classList.remove('input-success');
        document.getElementById('name').classList.add('input-err');
        document.getElementById('apellidos').classList.remove('input-success');
        document.getElementById('apellidos').classList.add('input-err');
        window.location.reload();
    }else{
        name = document.getElementById('name').value;
        lastname = document.getElementById('apellidos').value;
        const user ={
            nombre : name,
            apellido:lastname,
            emails:email,
            contrasena: password,
            info : [],
            contactos: []
        }
        console.log(user);
        usuario.push(user);
        console.log(usuario);
        window.location.href='profilecompletion.html';
        regionGenerator();
    }
}
function loginfields(){
    regionGenerator();
    usuario.forEach(function(userInfo){
        console.log(userInfo.nombre);

    })
}

function regionGenerator(){
    document.getElementById('region').innerHTML='';
    region.forEach(function(depto){
        document.getElementById('region').innerHTML+=`
            <option value="${depto.valor}"> ${depto.departamento}, ${depto.municipio}</option>
        `;
    })
}