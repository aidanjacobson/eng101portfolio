function doUpdateFocus(e) {
    var cardElements = document.getElementsByClassName("card");
    var cardRefElements = document.getElementsByClassName("cardref");
    for (var i = 0; i < cardElements.length; i++) {
        cardElements[i].classList.remove("selected");
    }
    for (var i = 0; i < cardRefElements.length; i++) {
        cardRefElements[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
    document.querySelector(e.target.getAttribute("data-href")).classList.add("selected");
}