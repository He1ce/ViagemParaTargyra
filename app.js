
// Acessando o nome de todas as pessoas e armazenando em um array
let sugestoes = dados.map(pessoa => pessoa.nome);
sugestoes = sugestoes.sort()

// console.log(sugestoes); // Isso imprimirá um array com todos os nomes

const input = document.querySelector("input")

input.addEventListener("click", (event) => {
    // Função para adicionar todas as sugestões à lista
function adicionarTodasSugestoes() {
     document.querySelectorAll(".lista-item").forEach(item => item.remove());
    sugestoes.forEach(nome => {
        const listaItem = document.createElement("li");
        listaItem.classList.add("lista-item");
        listaItem.textContent = nome;
        listaItem.addEventListener("click", () => {
                input.value = nome;
            adicionarTodasSugestoes(); // Remove todas as sugestões após a seleção
        });
        document.querySelector(".lista").appendChild(listaItem);
    });
}

input.addEventListener("input", (event) => {
    const termoBusca = event.target.value.toLowerCase();
    const listaItens = document.querySelector('.lista');

    // Limpa a lista antes de adicionar os novos itens
    listaItens.innerHTML = '';

    // Filtra as sugestões com base no termo de busca
    const sugestõesFiltradas = sugestoes.filter(nome => nome.toLowerCase().includes(termoBusca));

    // Adiciona as sugestões filtradas à lista
    sugestõesFiltradas.forEach(nome => {
        const listaItem = document.createElement("li");
        listaItem.classList.add("lista-item");
        listaItem.textContent = nome;
        listaItem.addEventListener("click", () => {
            input.value = nome;
            listaItens.innerHTML = ''; // Limpa a lista após a seleção
        });
        listaItens.appendChild(listaItem);
    });
});

adicionarTodasSugestoes();
});

document.addEventListener('click', (event) => {
    const lista = document.querySelector('.lista');
    const input = document.querySelector('input');

    // Verifica se o elemento clicado está dentro da lista ou do input
    if (!lista.contains(event.target) && !input.contains(event.target)) {
        // Remove todas as sugestões
        document.querySelectorAll('.lista-item').forEach(item => item.remove());
    }
});



function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultado = "";
    let nomeLower = "";
    
    for(let dado of dados)
    {
        let nomeLower = dado.nome.toLowerCase();

        if (nomeLower === campoPesquisa)
        {
            resultado +=
        `
                    <div class="item-resultado">
                        <h2>
                            ${dado.nome}
                        </h2>
    
                        <div class="personagens" style="background-image: url(${dado.foto});"></div>
    
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href=${dado.link} target="_blank">
                            Player <span class="icon"></span>
                        </a>
                    </div>
        `;
        }
    };
    
    // Se o resultado estiver vazio, nenhum personagem foi encontrado
    if (!resultado) {
        section.innerHTML = "<p>Personagem Desconhecido...</p>";
    } else {
        section.innerHTML = resultado;
    }
}