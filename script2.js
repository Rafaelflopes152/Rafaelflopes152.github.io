function ativacaoMenu() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}
ativacaoMenu()

/* animação dos Catalogos */
// 1. Capturar os elementos necessários
const buttonGeral = document.querySelectorAll('.catalog_models ul li');// Os botões
const listaALL = document.querySelectorAll('.catalog_armazenamento ul li');// Todos os itens da lista
const buttonALL = document.querySelector('.catalog_models #all'); // Todos os itens da lista


listaALL.forEach((item) => {
    item.classList.add('ativo');
})

// muda o botão ativo 
function removeClick(index) {
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}
// Função para mostrar/esconder os produtos com base no botão clicado
function showLista(lista, buttom = "all") {

    lista.forEach(product => {
        // Se o ID do botão for 'all', mostramos todos os produtos
        if (buttom === 'all') {
            product.classList.add('ativo');
        } else {
            // Caso contrário, verificamos se o produto tem a classe correspondente ao ID do botão
            if (product.classList.contains(buttom)) {
                product.classList.add('ativo'); // esconde o produto
            } else {
                product.classList.remove('ativo'); // mostra o produto
            }
        }
    });
}

// Adicionar um ouvinte nalista dos filtros (delegação de eventos)
buttonGeral.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeClick(index);
        showLista(listaALL, item.id)
    })
})



