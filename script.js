function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}
escrevendoLetra()

function ativacaoMenu() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}
ativacaoMenu()

function sobreMim() {
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content li');

    divExperiencia[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow(index) {
        divExperiencia.forEach((divisao) => {
            divisao.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo')
        });
        divExperiencia[index].classList.add('ativo')
        liExperiencia[index].classList.add('ativo')
    }

    function slideShow2(index) {
        divEducation.forEach((divisao) => {
            divisao.classList.remove('ativo');
        });
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo')
        });
        divEducation[index].classList.add('ativo')
        liEducation[index].classList.add('ativo')
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        })
    })

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        })
    })
}
sobreMim();

/* animação dos projetos */
const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_models ul li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{ 
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
buttonGeral.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeClick(index);
        showLista(listaALL, item.id)
    })
})



