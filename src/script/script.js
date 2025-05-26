//Variavel searchInpput armazena o input mas não o valor que é digitado 

const searchInpput = document.getElementById('search');

//quando o usuario interagir com o inpute ele vai "escutar" oque o usuário digitar
searchInpput.addEventListener('input', (Event) => {

    //variável que armazena o que o usuário digita
    const value = formatString(event.target.value);
    //Usando o querySelectorAll porque vou pegar mais de um elemento e dentro dele eu passo
    //Resumindo: Criei uma lista e com os items que selecionei 
    const items = document.querySelectorAll('.items .item');
    //pega do html o elemento da lista que tem que ser mostrado caso não apareça nenhum filme na busca
    const noResult = document.getElementById('no_results');

    let hasResult = false;


    //verifica se o input não está vazio
    if (value != '') {

        items.forEach(item => {
            // essa variável pega a classe title lá do html e mostra só o titulo quando pesquisa 
            const itemTitle = item.querySelector('.title').textContent;
            if (formatString(itemTitle).indexOf(value) !== -1) {
                item.style.display = 'flex';
                hasResult = true;
            } else {
                item.style.display = 'none';
            }
        })
        if (hasResult) {
            noResult.style.display = 'none';
        }
        else {
            noResult.style.display = 'block';

        }
    }
    else {
        items.forEach(item => item.style.display = 'flex');

        noResult.style.display = 'none';
    }

});

function formatString(value) {

    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}