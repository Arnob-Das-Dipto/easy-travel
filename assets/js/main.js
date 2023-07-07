

$(document).ready(function() {
    let menu_icon = document.querySelector('.menu-icon i');
    let menu_list = document.querySelector('.menu');

    menu_icon.onclick = () => {
        menu_icon.classList.toggle('bx-x');
        menu_list.classList.toggle('open');
    }
})