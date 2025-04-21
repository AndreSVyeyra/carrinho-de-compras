// Pega o elemento do HTML que tem o ID "produto" e armazena na variável 'produto'
// Normalmente é um <select>, <input> ou outro campo de seleção de produto
let produto = document.getElementById("produto");

// Seleciona todos os elementos com a classe "carrinho__produtos__produto" e armazena em 'produtosArmazenadosNaLista'
// Isso retorna uma lista (NodeList) de todos os produtos que já estão no carrinho
let produtosArmazenadosNaLista = document.querySelectorAll(".carrinho__produtos__produto");

limpar ();

function adicionar() {
    // Verifica se o valor selecionado no produto é "Fone de ouvido - R$100"
if (produto.value === "Fone de ouvido - R$100") {
    // Seleciona o elemento da lista de produtos do carrinho
    let obtendoValorLista = document.querySelector(".carrinho__produtos__produto");
    obtendoValorLista.insertAdjacentHTML("beforeend", "<br>");
    
    // Pega o primeiro filho (provavelmente um item de produto já existente) para servir como modelo
    let modelo = obtendoValorLista.firstChild;
    
    // Cria uma cópia (clone) do modelo selecionado, incluindo seus nós filhos
    let clone = modelo.cloneNode(true);
    
    // Altera o texto do clone para "Fone de ouvido - R$100"
    clone.textContent = "Fone de ouvido - R$100";
    
    // Adiciona o clone como um novo filho dentro da lista de produtos no carrinho
    obtendoValorLista.appendChild(clone);

} // Se o valor selecionado no produto for "Celular - R$1400"
else if (produto.value === "Celular - R$1400") {

    // Seleciona o primeiro elemento com a classe "carrinho__produtos__produto"
    let obtendoValorLista = document.querySelector(".carrinho__produtos__produto");

    // Insere uma quebra de linha (<br>) no final do conteúdo da lista
    // Isso serve apenas para dar uma separação visual entre os produtos
    obtendoValorLista.insertAdjacentHTML("beforeend", "<br>");

    // Pega o primeiro filho (primeiro elemento dentro do carrinho) para usar como modelo
    let modelo = obtendoValorLista.firstChild;

    // Cria uma cópia (clone) do modelo, incluindo todos os seus nós filhos (deep clone)
    let cloneModelo = modelo.cloneNode(true);

    // Define o texto interno do clone como "Celular - R$1400"
    cloneModelo.textContent = `Celular - R$1400 `;

    // Adiciona o clone já alterado no final da lista de produtos do carrinho
    obtendoValorLista.appendChild(cloneModelo);
}
   
}


function limpar()  {
    limparListaProdutos();
}




function  limparListaProdutos () {
    produtosArmazenadosNaLista.item(0).textContent = " ";  
}

