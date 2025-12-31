//je selectionne et he stock la div "modal-container"
const modal = document.querySelector('.modal-container');
console.log(modal);

const btn = document.querySelector('.btn-success');
console.log(btn);

const code = document.querySelector('.code');
console.log(code);

const icone = document.querySelector('.fa-times');
console.log(icone);

window.addEventListener('scroll', displayModal)

function displayModal(){
    console.log('défilement détecté ');
    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'nombre de pixels depuis le haut de la page');

    if (hauteur > 100) {
        console.log('Affichage de la modale !');
        modal.style.display = "flex";
    }
};
btn.addEventListener('click', function() {
    console.log('bouton cliqué');
    code.style.display = "block";
    btn.style.display = "none";
});

icone.addEventListener('click', function(){
    console.log('icone cliqué');
    modal.style.display = "none";
    code.style.display = "none";
    btn.style.display = "block";
    window.removeEventListener('scroll', displayModal);
});
