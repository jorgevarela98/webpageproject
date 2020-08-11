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

var localStorage = window.localStorage;

if(localStorage.getItem('usuarios') == null){
    localStorage.setItem('usuarios', JSON.stringify(usuario));
}else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}
const user ={};
var email = '';
var password = '';
var name = '';
var lastname = '';
var cargo = '';
var empresa = '';
var pais = '';
var codigopostal = '';
var region = '';
var universidad = '';
var titulo = '';
var especializacion = '';
var fechaInicial ='';
var fechaGraduacion = '';

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
            inforegion :[],
            infopersonal : [],
            contactos: [],
            profilepictures:[]
        }
        console.log(user);
        usuario.push(user);
        console.log(usuario);
        localStorage.setItem('usuarios',JSON.stringify(usuario));
        window.location.href='profilecompletion.html';
    }
}
function locationInfo(){
    for(var i = 0 ; i < localStorage.length ; i++){
        var usuario = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
   
    if(document.getElementById('country').value=='' || document.getElementById('postalCode').value == ''){
        document.getElementById('country').classList.remove('input-success');
        document.getElementById('country').classList.add('input-err');
        document.getElementById('postalCode').classList.remove('input-success');
        document.getElementById('postalCode').classList.add('input-err');
        window.location.reload();
    }else{
        
        pais = document.getElementById('country').value;
        codigopostal = document.getElementById('postalCode').value;
        region = document.getElementById('departamento').value;
        
        const locationInfo ={
            pais: pais,
            codigopostal: codigopostal,
            región: region
        }
        console.log(locationInfo);

        for(var k = 0 ; k < usuario.length ; k++){
            usuario[k].inforegion.push(locationInfo);
        }
        localStorage.setItem('usuarios',JSON.stringify(usuario));
        document.getElementById('regionform').classList.remove('showdisplay');
        document.getElementById('regionform').classList.add('hidedisplay');
        document.getElementById('businessform').classList.remove('hidedisplay');
        document.getElementById('businessform').classList.add('showdisplay');
    }
}

function showBusinessForm(){
    document.getElementById('studentform').classList.remove('showdisplay');
    document.getElementById('studentform').classList.add('hidedisplay');
    
    document.getElementById('businessform').classList.remove('hidedisplay');
    document.getElementById('businessform').classList.add('showdisplay');
}

function businessInfo(){
    for(var i = 0 ; i < localStorage.length ; i++){
        var usuario = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    
    if(document.getElementById('position').value=='' || document.getElementById('business').value == ''){
        document.getElementById('position').classList.remove('input-success');
        document.getElementById('position').classList.add('input-err');
        document.getElementById('business').classList.remove('input-success');
        document.getElementById('business').classList.add('input-err');
        window.location.reload();
    }else{
        cargo = document.getElementById('position').value;
        empresa = document.getElementById('business').value;
        const informacionPersonal ={
            position: cargo,
            business : empresa
        } 
        for(var q = 0 ; q < usuario.length ; q++){
            usuario[q].infopersonal.push(informacionPersonal);
        }
        localStorage.setItem('usuarios',JSON.stringify(usuario));
        /*
        email
        password
        
        cargo
        empresa
        
        codigopostal
        region
        universidad
        titulo
        especializacion
        fechaInicial
        fechaGraduacion
        */ 
        axios({
            url:'../../api/usuarios.php',
            method:'post',
            responseType: 'json',
            data:{
                name:name,
                lastname:lastname,
                email:email,
                password: password,
                locationInfo:{
                    country:pais,
                    region:
                    postalcode:
                },
                personalInfo:{

                },
                userCode:
            }
        }).then(res=>{
            console.log('Info Usuario: ',res);
        }).catch(error=>{
            console.error(error);
        });
        //window.location.href='inicio.html';
        /*
        conect w people Still doesnt work :'v
        */ 
    }
}
function studentInfo(){
    for(var i = 0 ; i < localStorage.length ; i++){
        var usuario = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    if(document.getElementById('university').value=='' || document.getElementById('degree').value == ''|| document.getElementById('specialization').value == ''|| document.getElementById('initialDate').value == ''|| document.getElementById('gradDate').value == ''){
        document.getElementById('university').classList.remove('input-success');
        document.getElementById('university').classList.add('input-err');
        document.getElementById('degree').classList.remove('input-success');
        document.getElementById('degree').classList.add('input-err');
        document.getElementById('specialization').classList.remove('input-success');
        document.getElementById('specialization').classList.add('input-err');
        document.getElementById('initialDate').classList.remove('input-success');
        document.getElementById('initialDate').classList.add('input-err');
        document.getElementById('gradDate').classList.remove('input-success');
        document.getElementById('gradDate').classList.add('input-err');
        window.location.reload();
    }else{
        
        universidad = document.getElementById('university').value;
        titulo = document.getElementById('degree').value;
        especializacion = document.getElementById('specialization').value;
        fechaInicial = document.getElementById('initialDate').value;
        fechaGraduacion = document.getElementById('gradDate').value;
        const informacionPersonal ={
            university : universidad,
            degree : titulo,
            specialization : especializacion,
            initialDate : fechaInicial,
            gradDate : fechaGraduacion
        } 
        for(var q = 0 ; q < usuario.length ; q++){
            usuario[q].infopersonal.push(informacionPersonal);
        }
    }
    localStorage.setItem('usuarios',JSON.stringify(usuario));
    axios({
        url:'../api/usuarios.php',
        method:'post',
        responseType: 'json',
        data:user
    }).then(res=>{
        console.log('Info Usuario: ',res);
    }).catch(error=>{
        console.error(error);
    });
    window.location.href='conectwpeople.html';
}
function showStudentInfo(){
    document.getElementById('businessform').classList.remove('showdisplay');
    document.getElementById('businessform').classList.add('hidedisplay');
    document.getElementById('studentform').classList.remove('hidedisplay');
    document.getElementById('studentform').classList.add('showdisplay');
}
cardGenerator();
function cardGenerator(){
    document.getElementById('connect-card').innerHTML='';
    for(let n = 0 ; n < test.length ; n++){
        document.getElementById('connect-card').innerHTML+=`
        
            <div id="filterdisplay" class="card p-3 info-card-design">
                
                <button id="connectButton"  onclick="addPerson(${n})" class="connect-button ">
                        <i id="add-person" class="fas fa-plus"></i>
                        <i id="add-person-success" class="fas fa-check hidedisplay"></i>
                </button>
                <img src="${test[n].pfp}" class="card-img-top connect-pfp" alt="...">
                <div class="card-body">
                    <div style="text-align: left;">
                        <p class="card-font name-card">${test[n].nombre}</p>
                    </div>
                    <div>
                        <p class="card-font">${test[n].info}</p>
                    </div>
                </div>
            </div>
        
        `;
    }
}

function addPerson(index){
    console.log(index);
    
    document.getElementById('add-person').classList.add('hidedisplay')
    document.getElementById('connectButton').classList.remove('connect-button');
    document.getElementById('add-person-success').classList.remove('hidedisplay'); 
    document.getElementById('add-person-success').classList.add('showdisplay'); 
    document.getElementById('connectButton').classList.add('connect-button-success');
    
    
}


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
}
/*
function filterNames(){
    var filter = document.getElementById('search-inp').value.toUpperCase();
    
    document.getElementById('connect-card').innerHTML='';
    //Filtra los nombres pero por cada letra sin volverlo Uppercase.
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
*/
