const menuButtons = document.querySelectorAll('li.menu__item');
for (let i=0; i<menuButtons.length; i++){
    let menuLink = menuButtons[i].querySelector('a.menu__link');
    let subMenu = menuButtons[i].querySelector('ul.menu_sub');
    if (subMenu !== null) {

        menuLink.onclick = function (){
            let visibleSubMenus = document.querySelectorAll('ul.menu_active');
            if (visibleSubMenus !== null){

                for (let menu of visibleSubMenus){
                    menu.classList.remove("menu_active");
                    if (menu === subMenu){
                        return false
                    }
                }
            }
            subMenu.classList.add("menu_active");
            return false
        }
    }
}