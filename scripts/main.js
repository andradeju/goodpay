//Banco de dados fake
const usuarios = [
    {
        nomeUsuario: "juca",
        email: "juca@jucawestie.com",
        senha: "0000",
    },
    {
        nomeUsuario: "chiara",
        email: "chiara@chiara.com",
        senha: "1111",
    },
];

//dados de etrada de login
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

//botao de entrar
const btnEntrar = document.getElementById("btn-entrar");
btnEntrar.addEventListener("click", () => {
    //capturar os dados dos campos
    const email = campoEmail.value;
    const senha = campoSenha.value;
    
    //checar o array se existe usuário com email digitado
    //find percorre o array ate encontrar o elemento que satisfaz a condição 
    let usuarioValido = usuarios.find((usuario) => usuario.email === email);
    console.log(usuarioValido);
    if(usuarioValido !== undefined){
        if(usuarioValido.senha === senha){
            window.location.pathname = "/app.html";
            console.log("Entra fio");
        } else {
            alert("Senha incorreta");
        }
        
    } else {
        //o usuario não existe
        alert("O usuário não existe");
    }
});
