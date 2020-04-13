

function onMenuItemMouseEnter(){
  const submenu = document.getElementsByClassName("menu__sub")[0];
  submenu.style.display = "block"
}

function mouseLeave (){
  const submenu = document.getElementsByClassName("menu__sub")[0];
    submenu.style.display = "none";
}

const myMenuItem = document.getElementsByClassName('menu__sub');
for(const menuItem of myMenuItem){
menuItem.onmouseenter = onMenuItemMouseEnter;
menuItem.onmouseleave = mouseLeave;
}
