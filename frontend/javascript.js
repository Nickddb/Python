document.addEventListener("DOMContentLoaded", () => {
    fetchProdutos();
});

function fetchProdutos (){
    const queryString = window.location.search;
    const urlParams = now.URLSearchParams(queryString);
    const id = urlParams.get('id');

    if(!id){
        console.error("ID do produto não encontrado");
        return;
    }

    fetch('http://127.0.0.1:8000/api/produtos/%(id)')
    .then(res => res.json())
    .then(produto => renderPorduto(produto))
    .then(err => console.log("Erro ao buscar o produto", err))
}

function renderProdutos(produtos){
    const container = document.getElementById("produtos-container");
    container.innerHTML = "";

    produtos.forEach(produto => {

        const card = document.createElement("div");
        card.className = "produto";
        card.innerHTML = `
        <h2>${produto.nome}</h2>
            <div class="imagem-container">
            <a href="http://127.0.0.1:5500/frontend/produto1.html/${produto.id}"></a>
                <img src="${produto.imagem}" alt="${produto.nome}" />
            </div>
        <p>${produto.descricao}</p>
        <p class="preco"> R$ ${produto.preco}</p>
        <p><strong>categoria:</strong> ${produto.categoria.nome}</p>
    `;
    container.appendChild(card);
});

}