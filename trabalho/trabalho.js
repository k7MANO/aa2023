var pesquisa = document.getElementById("caixaDePesquisa")
pesquisa.style.visibility="hidden"

var iconeDeBusca = document.querySelector('#iconeDePesquisa')

//document.querySelector('#iconeDePesquisa').onclick{pesquisa.classList.toggle('active')}

iconeDeBusca.addEventListener("click",busca)

function busca() {
    pesquisa.classList.toggle('active')
    pesquisa.style.visibility="visible"
    if(pesquisa.style.visibility == "visible") {
       pesquisa.focus()
    }
}


