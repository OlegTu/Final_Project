var menuElem = document.getElementById('menu_bar');
var titleElem = menuElem.querySelector('.navigator__menu--titel');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};