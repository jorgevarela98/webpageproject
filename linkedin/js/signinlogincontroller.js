var usuario = [];
var test = [
    {
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false
    },
    {
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false
    },
    {
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false
    },
    {
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false
    },
    {
        nombre:'Stacy',
        nickname: 'Stacy',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false
    },
    {
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },
    {
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },
    {
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },
    {
        nombre:'Stacy',
        nickname: 'Stacy',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },{
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },
    {
        nombre:'Stacy',
        nickname: 'Stacy',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },{
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false
    },
    {
        nombre:'Stacy',
        nickname: 'Stacy',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },{
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },
    {
        nombre:'Stacy',
        nickname: 'Stacy',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    },{
        nombre:'John',
        nickname: 'Naked Snake',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false
    },
    {
        nombre:'Stacy',
        nickname: 'Stacy',
        pfp :'assets/img/pfp.jpeg',
        info : 'Professional Spy',
        agregar: false 
    }
]
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

function cardGenerator(){
    document.getElementById('connect-card').innerHTML='';
    test.forEach(function(info){
        document.getElementById('connect-card').innerHTML+=`
        
            <div id="filterdisplay" class="card p-3 info-card-design">
                <button class="connect-button">
                    <i class="fas fa-plus"></i>
                </button>
                <img src="${info.pfp}" class="card-img-top connect-pfp" alt="...">
                <div class="card-body">
                    <div style="text-align: left;">
                        <p class="card-font name-card">${info.nombre}</p>
                    </div>
                    <div>
                        <p class="card-font">${info.info}</p>
                    </div>
                </div>
            </div>
        
        `;
    })
}
cardGenerator();
/* 

function filterNames(){
    
    var filter = document.getElementById('search-inp').value.toUpperCase();
    document.getElementById('connect-card').innerHTML='';
    test.forEach(function(search){
        if(filter == search.nombre.toUpperCase()){
            document.getElementById('connect-card').innerHTML+=`
            <div class="card p-3 info-card-design">
                <button class="connect-button">
                    <i class="fas fa-plus"></i>
                </button>
                <img src="${search.pfp}" class="card-img-top connect-pfp" alt="...">
                <div class="card-body">
                    <div style="text-align: left;">
                        <p class="card-font name-card">${search.nombre}</p>
                    </div>
                    <div>
                        <p class="card-font">${search.info}</p>
                    </div>
                </div>
            </div>
        `;
        }else{
            if(filter != search.nombre.toUpperCase()){
                document.getElementById('connect-card').innerHTML+=``;
            }else{
                cardGenerator();
            }
        }
    })
}*/
function filterNames(){
    var filter = document.getElementById('search-inp').value.toUpperCase();
    
    document.getElementById('connect-card').innerHTML='';
    for(i = 0 ; i < test.length ; i++){
        for(j = 0 ; j < test[i].nombre.length ; j++){
            if(filter[j]==test[i].nombre[j]){
                document.getElementById('connect-card').innerHTML+=`
                <div class="card p-3 info-card-design">
                    <button class="connect-button">
                        <i class="fas fa-plus"></i>
                    </button>
                    <img src="${test[i].pfp}" class="card-img-top connect-pfp" alt="...">
                    <div class="card-body">
                        <div style="text-align: left;">
                            <p class="card-font name-card">${test[i].nombre}</p>
                        </div>
                        <div>
                            <p class="card-font">${test[i].info}</p>
                        </div>
                    </div>
                </div>
            `;
            }else{
                document.getElementById('connect-card').innerHTML+=``;
            }
        }
    }
}
