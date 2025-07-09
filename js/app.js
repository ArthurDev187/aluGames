function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imgJogo = gameClicado.querySelector('.dashboard__item__img');
    let btnJogo = gameClicado.querySelector('.dashboard__item__button');

    if (btnJogo.classList.contains('dashboard__item__button--return') && imgJogo.classList.contains('dashboard__item__img--rented')) {
        btnJogo.classList.remove('dashboard__item__button--return');
        imgJogo.classList.remove('dashboard__item__img--rented');
        btnJogo.textContent = 'Alugar';
    } else {
        btnJogo.classList.add('dashboard__item__button--return');
        imgJogo.classList.add('dashboard__item__img--rented');
        btnJogo.textContent = 'Devolver';
    }
}