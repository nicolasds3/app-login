function login() {
    // chama os elemenos do HTML.
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    // declara as variáveis do tipo String, que serão comparadas no if.
    var u = 'nicolasoveiga';
    var s = 'nicolas';
    // Checkup de usuário e senha.
    if ((usuario!==u) || (senha!==s)) {
        alert("Senha ou usuario incorretos!")  
    } else {
        // envia para o próximo html.
        window.location.href = "index2.html";
    }

}