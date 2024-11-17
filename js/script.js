
//----------------------------------------------------------MENU--------------------------------------------------
//----------------------------------------------------------OPEN/CLOSE--------------------------------------------------
document.getElementById("menuArrow").onclick = function () { opclMenu(); };

var isMenuOpen = false;

function opclMenu() {
  const menuChange = document.querySelectorAll(".menuChange");
  for (i = 0; i < menuChange.length; i++) {
    menuChange[i].classList.toggle("menued");
  }

  isMenuOpen = isMenuOpen ? false : true;

}

window.addEventListener('click', function (e) {
  const menuEle = document.querySelectorAll(".menuEle");
  var isMenuElement = Array.from(menuEle).some(m => m.contains(e.target));
  if (!isMenuElement && isMenuOpen) {
    opclMenu();
  }
});

//----------------------------------------------------------SETTINGS--------------------------------------------------

//----------------------------------------------------------MENUEND-----------------------------------------------

//----------------------------------------------------------SCROLL--------------------------------------------------

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  const scrollelements = document.querySelectorAll(".nScroll");
  for (i = 0; i < scrollelements.length; i++) {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
      scrollelements[i].classList.add("sScroll");
    } else {
      scrollelements[i].classList.remove("sScroll");
    }
  }
}

//----------------------------------------------------------END--------------------------------------------------


