function showInicioUserCard(){
    axios({
        url:'../backend/api/usuarios.php',
        method:'get',
        responseType: 'json'
    }).then(res=>{
        console.log(res);
        document.getElementById('inicioProfileCard').innerHTML=''
        for(let i = 0 ; i<res.data.length;i++){
            console.log(res.data[i].typeAccount);
            if(res.data[i].typeAccount == "business"){
                document.getElementById('inicioProfileCard').innerHTML=`
                    <div class="card" ">
                        <img src="assets/img/asd.jpg" class="card-img-top profile-background" alt="">
                        <img src="assets/img/pfp.jpeg" class="card-img-top pfp-imgstyle"  alt="">
                        <div class="card-body card-content">
                            <h5 class="card-title">¡Te damos la bienvenida, ${res.data[i].name}!</h5>
                            <p class="info-p">Worker at Patreon as Software Engineer</p>
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
                if(res.data[i].typeAccount == "school"){
                    document.getElementById('inicioProfileCard').innerHTML=`
                        <div class="card" ">
                            <img src="assets/img/asd.jpg" class="card-img-top profile-background" alt="">
                            <img src="assets/img/pfp.jpeg" class="card-img-top pfp-imgstyle"  alt="">
                            <div class="card-body card-content">
                                <h5 class="card-title">¡Te damos la bienvenida, ${res.data[i].name}!</h5>
                                <p class="info-p">Worker at Patreon as Software Engineer</p>
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
        }
    }).catch(error=>{
        console.error(error);
    });
}
function main(){
    showInicioUserCard();
}
main();