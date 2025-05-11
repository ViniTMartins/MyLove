const botao = document.getElementById('botaoLogin')
const inputSenha = document.getElementById('senha')


botao.addEventListener('click', login);

function resetaMensagemLogin() {
    containerMensagemLogin.style.background = 'transparent'
    containerMensagemLogin.style.marginTop = '0rem'
    mensagemLogin.textContent = ''
}

function vaiPraTelaInicial() {
    window.location.href = "mylove.html";
}

function login() {
    const senha = inputSenha.value;
    resetaMensagemLogin()


    

    if (senha == "Bella") {
        document.documentElement.innerHTML = 'LOGIN EFETUADO COM SUCESSO!'
        vaiPraTelaInicial()
        console.log("Login feito com sucesso")
    }
    else{
        containerMensagemLogin.style.background = 'red'
        containerMensagemLogin.style.marginTop = '3rem'
        mensagemLogin.textContent = 'Acesso inválido. Tente novamente'
        console.log("Login sem sucesso")
    }

    
}