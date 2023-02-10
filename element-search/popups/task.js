document.getElementById('modal_main').classList.add('modal_active');

const modals = document.querySelectorAll('div.modal');

for (let i = 0; i < modals.length; i++) {
    let closeButton = modals[i].querySelector('div.modal__close');
    closeButton.addEventListener('click', closeActiveModal);

    let sucessButton = modals[i].querySelector('a.show-success');
    if (sucessButton !== null){
        sucessButton.addEventListener('click', showSuccessModal);
    }
}

function closeActiveModal(){
    for (let i = 0; i < modals.length; i++) {
        if (modals[i].classList.contains('modal_active')){
            modals[i].classList.remove('modal_active');
        }
    }
}
function showSuccessModal(){
    let modalSuccess = document.getElementById('modal_success');
    modalSuccess.classList.add('modal_active');
}