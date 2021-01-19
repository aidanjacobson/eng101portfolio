function doUpdateFocus(e) {
    /*
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
    */
   //elementClick(e.target);
   location.hash = e.target.getAttribute("data-href");
   window.onhashchange();
}

function elementClick(elementHash) {
    var cardElements = document.getElementsByClassName("card");
    var cardRefElements = document.getElementsByClassName("cardref");
    console.log(elementHash);
    for (var i = 0; i < cardElements.length; i++) {
        cardElements[i].classList.remove("selected");
        if ("#" + cardElements[i].id == elementHash) {
            cardElements[i].classList.add("selected");
        }
    }
    for (var i = 0; i < cardRefElements.length; i++) {
        cardRefElements[i].classList.remove("selected");
        if (cardRefElements[i].getAttribute("data-href") == elementHash) {
            cardRefElements[i].classList.add("selected");
        }
    }
}
window.onhashchange = function(e) {
    elementClick(location.hash);
}
window.onload = function() {
    if (location.hash == "") {
        location.hash = "#aboutme";
    }
}