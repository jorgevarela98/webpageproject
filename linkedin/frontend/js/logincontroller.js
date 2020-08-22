function login(){
    axios({
        url:'../backend/api/login.php',
        method: 'post',
        responseType: 'json',
        data:{
            email: document.getElementById('login-email').value ,
            password: document.getElementById('login-password').value
        }
    }).then(res=>{
        console.log(res);
        if(res.data.codigoResultado==1){
            window.location.href = "inicio.html";
        }else{
            document.getElementById('error').style.display ='block';
            document.getElementById('error').innerHTML= res.data.mensaje;
        }
    }).catch(error=>{
        console.error(error);
    });
}