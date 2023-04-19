
let botaoEnviar = document.getElementById("btn")
let nome = document.getElementById("nome").value
let sobrenome = document.getElementById("sobrenome").value

botaoEnviar.addEventListener("click", function(){   
    
    let body = document.body
    let novaH1 = document.createElement("H1")
    let nomeCompleto = document.createTextNode(nome + " " + sobrenome);
    novaH1.appendChild(nomeCompleto)
    body.appendChild(novaH1)
})