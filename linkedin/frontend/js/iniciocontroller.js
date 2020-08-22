var actualUserName = '';
var postId = 0;
var userCode=0;
function showInicioUserCard(){
    axios({
        url:'../backend/api/usuarios.php?idUsuario='+1,
        method:'get',
        responseType: 'json'
    }).then(res=>{
        //console.log(res.data);
        //console.log(actualUserName);
        //console.log(res.data.typeAccount);
        actualUserName = res.data.name;
        userCode
        
        document.getElementById('inicioProfileCard').innerHTML=''
        
        if(res.data.typeAccount == "business"){
            document.getElementById('inicioProfileCard').innerHTML=`
                <div class="card" ">
                    <img src="assets/img/asd.jpg" class="card-img-top profile-background" alt="">
                    <img src="assets/img/pfp.jpeg" class="card-img-top pfp-imgstyle"  alt="">
                    <div class="card-body card-content">
                        <h5 class="card-title">¡Te damos la bienvenida, ${res.data.name}!</h5>
                        <p class="info-p">Worker at ${res.data.personalInfo.business} as ${res.data.personalInfo.job} </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div>
                                <a href="">
                                    Contactos
                                </a>
                                <a href="">
                                    Amplia tu red
                                </a>
                                <div>
                                    <a href=""><i class="fas fa-user-plus"></i></a>
                                </div>
                                
                            </div>
                        </li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        
                        </li>
                    </ul>
                </div>
            `;
        }else{
            if(res.data.typeAccount == "school"){
                document.getElementById('inicioProfileCard').innerHTML=`
                    <div class="card" ">
                        <img src="assets/img/asd.jpg" class="card-img-top profile-background" alt="">
                        <img src="assets/img/pfp.jpeg" class="card-img-top pfp-imgstyle"  alt="">
                        <div class="card-body card-content">
                            <h5 class="card-title">¡Te damos la bienvenida, ${res.data.name}!</h5>
                            <p class="info-p">studies at</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div>
                                    <a href="">
                                        Contactos
                                    </a>
                                    <a href="">
                                        Amplia tu red
                                    </a>
                                    <div>
                                        <a href=""><i class="fas fa-user-plus"></i></a>
                                    </div>
                                    
                                </div>
                            </li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            
                            </li>
                        </ul>
                    </div>
                `;
            }
        }
        /*
        Parte para generar post modal
        */
        document.getElementById('modalPost').innerHTML=
            `<div class="modal fade" id="postmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Crea una Publicación</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row no-gutters flexes-cards" >
                                <div >
                                    <img class="cardimg" src="assets/img/pfp.jpeg" class="card-img" alt="...">
                                </div>
                                <div class="card-body card-body-dims flexes-cards">
                                    <div>
                                        <p class="card-title" style="margin-bottom: 0 !important">${res.data.name} ${res.data.lastname}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <textarea id="textarea-publicacion" class="textarea-styles" rows="4" cols="50" placeholder="¿Sobre qué quieres hablar?"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="savePost()">Publicar</button>
                    </div>
                </div>
                </div>
            </div>
            `;
            savePost();
    }).catch(error=>{
        console.error(error);
    });
}
function savePost(){
    console.log(actualUserName);
    axios({
        url:'../backend/api/posts.php',
        method: 'post',
        responseType: 'json',
        data:{
            userCode:
        }
    }).then(res=>{}).catch(error=>{});
}
function main(){
    
    showInicioUserCard();
    
}
main();