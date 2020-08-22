
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
var idUser = 0;
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
        
        document.getElementById('signIn-1').classList.add('hidedisplay');
        document.getElementById('signIn-1').classList.remove('showdisplay');
        document.getElementById('cardbody2').classList.add('hidedisplay');
        document.getElementById('cardbody2').classList.remove('showdisplay');
        document.getElementById('body-background').classList.remove('singinBackground');
        document.getElementById('profileCompletion-form').classList.remove('hidedisplay');
        document.getElementById('profileCompletion-form').classList.add('showdisplay');
        document.getElementById('regionform').classList.remove('hidedisplay');
        document.getElementById('regionform').classList.add('showdisplay');
    }
}
function locationInfo(){
    
   
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
        
        console.log(name);
        console.log(locationInfo);

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
        axios({
            url:'../backend/api/usuarios.php',
            method:'get',
            responseType: 'json',
        }).then(res=>{
            alert(res.data.length+1);
            axios({
                url:'../backend/api/usuarios.php',
                method:'post',
                responseType: 'json',
                data:{
                    name:name,
                    lastname:lastname,
                    email:email,
                    password: password,
                    typeAccount: "business",
                    locationInfo:{
                        country:pais,
                        region:region,
                        postalcode:codigopostal
                    },
                    personalInfo:{
                        job : cargo,
                        business:empresa
                    },
                    userCode:(res.data.length+1)
                }
            }).then(res=>{
                console.log(name);
                console.log('Info Usuario: ',res);
            }).catch(error=>{
                console.error(error);
            });
        }).catch(error=>{});
        
        window.location.href='inicio.html';
        /*
        conect w people Still doesnt work :'v
        */ 
    }
}
function studentInfo(){
    /*for(var i = 0 ; i < localStorage.length ; i++){
        var usuario = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }*/
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
        axios({
            url:'../backend/api/usuarios.php',
            method:'get',
            responseType: 'json',
        }).then(res=>{
            alert(res.data.length+1);
            axios({
                url:'../backend/api/usuarios.php',
                method:'post',
                responseType: 'json',
                data:{
                    name:name,
                    lastname:lastname,
                    email:email,
                    password: password,
                    typeAccount: "school",
                    locationInfo:{
                        country:pais,
                        region:region,
                        postalcode:codigopostal
                    },
                    personalInfo:{
                        university:universidad,
                        degree :titulo,
                        specialization : especializacion,
                        initialdate : fechaInicial,
                        graduationDate : fechaGraduacion
                    },
                    userCode:(res.data.length+1)
                }
            }).then(res=>{
                console.log(name);
                console.log('Info Usuario: ',res);
            }).catch(error=>{
                console.error(error);
            });
        }).catch(error=>{});
        
        window.location.href='inicio.html';
    } 
}
function showStudentInfo(){
    document.getElementById('businessform').classList.remove('showdisplay');
    document.getElementById('businessform').classList.add('hidedisplay');
    document.getElementById('studentform').classList.remove('hidedisplay');
    document.getElementById('studentform').classList.add('showdisplay');
}
//cardGenerator();
/*function cardGenerator(){
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
}*/

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

