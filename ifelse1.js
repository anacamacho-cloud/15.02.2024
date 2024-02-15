function verificarLogin(){
    let txtLogin = document.getElementById("txtLogin");
    let txtSenha = document.getElementById("txtSenha");

    const login = "teste";
    senha = "teste2";

    if(txtLogin.value == login && txtSenha.value == senha) {
        console.log("Logado com sucesso!")
    } else{
        console.log("Login ou Senha incorretos.")
    }
}
