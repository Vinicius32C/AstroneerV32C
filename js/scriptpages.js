//----------------------------------------------------------TABS--------------------------------------------------
const tabNContent = document.querySelectorAll('.tabNContent');
tabNContent.forEach(tab => {
    tab.onclick = function(){
        var tabContent = tab.nextElementSibling;
        var tabArrow1 = tab.querySelector('.tabArrow1');
        var tabArrow2 = tab.querySelector('.tabArrow2');
        opclTab(tabContent, tabArrow1, tabArrow2);
    };
});

function opclTab(tabContent, tabArrow1, tabArrow2){
    const computedStyle = window.getComputedStyle(tabContent);
    if (computedStyle.display === "none") {
        tabContent.classList.toggle("tabChange");
        tabArrow1.classList.toggle("tabChange");
        tabArrow2.classList.toggle("tabChange");

    } else {
        tabContent.classList.toggle("tabChange");
        tabArrow1.classList.toggle("tabChange");
        tabArrow2.classList.toggle("tabChange");
    }
}
//----------------------------------------------------------TABS FIM--------------------------------------------------
