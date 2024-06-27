let slider = document.querySelector('#slider')
let button = document.querySelector('#button')

let span = document.querySelector('#valor')
let senha = document.querySelector('#password')

let containerSenha = document.querySelector('#container-password')

let charset = "ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz012456789@#$&*!+!"
let novaSenha = ""

span.innerHTML = slider.value

slider.oninput = function(){
    span.innerHTML = this.value
}

function genereteSenha(){
    let pass = ""
    for(let i = 0, n= charset.length; i< slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerSenha.classList.remove("hide")
    senha.innerHTML = pass
    novaSenha = pass
}



function copiarSenha(){
navigator.clipboard.writeText(novaSenha)

}