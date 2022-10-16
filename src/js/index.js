// Objetivo: quando clicar na aba, mostrar o conteudo da aba clicada e esconder o conteudo da aba anterior

// Passo 1 - Dar um jeito de pegar os elementos que representa as abas no HTML.
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // Passo 2 - dar um jeito de identificar o clique no elemento da aba.
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    // Passo 3 - quando o usuário clicar, desmarcar a aba selecionada.
const abaSelecionada = document.querySelector(".aba.selecionado")
abaSelecionada.classList.remove("selecionado")

// Passo 4 - marcar a aba clicada como selecionado
aba.classList.add("selecionado");

}

function mostrarInformacoesDaAba(aba){
    // Passo 5 - esconder conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // Passo 6 -  mostrar o conteudo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}