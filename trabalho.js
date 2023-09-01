var pesquisa = document.getElementById("caixaDePesquisa")
var header = document.getElementById("header")
var Conhecer = document.getElementById("saibaMais")
var iconeDeBusca = document.getElementById('iconeDePesquisa')
pesquisa.style.visibility="hidden"


//document.querySelector('#iconeDePesquisa').onclick{pesquisa.classList.toggle('active')}
Conhecer.addEventListener("click",abrirPesquisa)
iconeDeBusca.addEventListener("click",busca)
window.addEventListener('scroll',descer)

function busca() {
    pesquisa.classList.toggle('active')
    pesquisa.style.visibility="visible"
    if(pesquisa.style.visibility == "visible") {
       pesquisa.focus()
    }
}
function abrirPesquisa() {
    pesquisa.classList.toggle('active')
    pesquisa.style.visibility="visible"
}
function descer() {
    if (window.scrollY > 0) {
        header.classList.toggle('shadow')
    }
}

