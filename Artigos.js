var pesquisa = document.getElementById("caixaDePesquisa")
var iconeDeBusca = document.getElementById("iconeDePesquisa")
var header = document.getElementById("header")

pesquisa.style.visibility="hidden"

iconeDeBusca.addEventListener("click",busca)
window.addEventListener('scroll',descer) 

function busca() {
    pesquisa.classList.toggle('active')
    pesquisa.style.visibility="visible"
    if(pesquisa.style.visibility == "visible") {
       pesquisa.focus()
    }
}
function descer() {
    if (window.scrollY > 0) {
        header.classList.toggle('shadow')
    }
}

