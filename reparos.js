var pesquisa = document.getElementById("caixaDePesquisa")
var iconeDeBusca = document.getElementById("iconeDePesquisa")

pesquisa.style.visibility="hidden"

iconeDeBusca.addEventListener("click",busca)

function busca() {
    pesquisa.classList.toggle('active')
    pesquisa.style.visibility="visible"
    if(pesquisa.style.visibility == "visible") {
       pesquisa.focus()
    }
}