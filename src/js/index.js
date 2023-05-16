
const botaoTema = document.getElementById("botao-tema"); 
const body = document.querySelector("body") 
const trocaBotao = document.querySelector(".imagem-botao")

botaoTema.addEventListener("click", () => { 
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    
    if (modoEscuroAtivo){ 
        body.classList.remove("modo-escuro")
        trocaBotao.setAttribute("src", "/projeto-pokemon/src/imagens/moon.png")
    } else { 
        body.classList.add("modo-escuro")
        trocaBotao.setAttribute("src", "./src/imagens/sun.png")
    } 
}) 


