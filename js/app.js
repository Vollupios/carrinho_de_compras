let totalGeral;
limpar();


function adicionar(){
// recuperar valores
let produto = document.getElementById("produto").value;
let nomeProduto = produto.split("-")[0];
let valorUnitario =produto.split("R$")[1];
let quantidade = document.getElementById("quantidade").value;

//calcula o preço e subtotal
let preco = quantidade * valorUnitario;

//adicionar ao carrinho
let carrinho = document.getElementById("lista-produtos");
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`;

//atualizar o valor
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById("valor-total");
campoTotal.textContent = `R$ ${totalGeral}`
document.getElementById("quantidade").value = "";

}

function limpar(){

    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0";

}