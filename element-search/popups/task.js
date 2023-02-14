document.getElementById("modal_main").classList.add("modal_active");

const closeButtons = document.querySelectorAll("div.modal__close");
const closeLinks = document.querySelectorAll("a.modal__close");

for (const closeButton of closeButtons.values()){
    closeButton.addEventListener('click',closeModals);
}
for (const closeLink of closeLinks.values()){
    closeLink.addEventListener('click',() => {
        closeModals();
        if (closeLink.classList.contains("show-success")){
            document.getElementById("modal_success").classList.add("modal_active");
        }
    })
}
function closeModals(){
    const activeModals = document.querySelectorAll("div.modal_active");
    for (const modal of activeModals.values()){
        modal.classList.remove("modal_active");
    }
}