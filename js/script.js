
//----------------------------------------------------------MENU--------------------------------------------------
//----------------------------------------------------------OPEN/CLOSE--------------------------------------------------
document.getElementById("menuArrow").onclick = function () { opclMenu(); };

var isMenuOpen = false;

function opclMenu() {
  const menuChange = document.querySelectorAll(".menuChange");
  for (i = 0; i < menuChange.length; i++) {
    menuChange[i].classList.toggle("menued");
  }
  if (isMenuOpen) {
    isMenuOpen = false;
  } else {
    isMenuOpen = true;
  }
}

window.addEventListener('click', function (e) {
  const menuEle = document.querySelectorAll(".menuEle");
  var isMenuElement = Array.from(menuEle).some(m => m.contains(e.target));
  if (!isMenuElement && isMenuOpen) {
    opclMenu();
  }
});

//----------------------------------------------------------SETTINGS--------------------------------------------------

document.getElementById("language").onclick = function () { changeLanguage(); };

function changeLanguage() {
  var isPort = false;
  const textPort = document.querySelectorAll(".port");
  const textEng = document.querySelectorAll(".eng");
  for (i = 0; i < textPort.length; i++) {
    if (textPort) {
      textPort[i].classList.toggle("langInline");
      textEng[i].classList.toggle("langNone");
    } else {
      textPort[i].classList.toggle("langNone");
      textEng[i].classList.toggle("langInline");
    }
  }
  opclMenu();
}

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

