document.addEventListener("DOMContentLoaded", () => {
    fetchProdutos();
});

function fetchProdutos (){
    fetch("http://127.0.0.1:8000/api/produtos/")
    .then(res => res.json())
    .then(data => renderProdutos(data))
    .catch(err => console.error("Erro ao buscar produtos", err));
}

function renderProdutos(produtos){
    const container = document.getElementById("Produtos-container");
    container.innerHTML = "";

    produtos.forEach(produto => {

        const card = document.createElement("div");
        card.className = "produto";
        card.innerHTML = `
        <h2>${produto.nome}</h2>
        <p>${produto.descricao}</p>
        <p class="preco"> R$ ${produto.preco}</p>
        <p><strong>categoria:</strong> ${produto.categoria.nome}</p>
    `;
    container.appendChild(card);
});

}