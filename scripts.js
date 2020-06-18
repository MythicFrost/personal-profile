var scrollLastDate = new Date();
var animationElements = document.getElementsByClassName("animation-fade-in-slide-up");


var triggeredOnLoad = false;

window.addEventListener("load", function(e) { //fallback in case DOMContentLoaded doesn't work
    if (!triggeredOnLoad) {
        triggerAnimations();
    }
});

window.addEventListener("DOMContentLoaded", function(e) { //this doesn't work on every browser
    console.log("DOMContentLoaded");
    if (!triggeredOnLoad) {
        triggerAnimations();
    }
});


window.addEventListener("scroll", function(e) {
    var now = new Date();
    var timeDifferenceMS = now - scrollLastDate;
    if (timeDifferenceMS < 125) { //wait at least 1/8th of a second per update
        return;
    }
    triggerAnimations();
    scrollLastDate = new Date();
});

function triggerAnimations() {
    var scrollY = window.scrollY;
    if (scrollY != 0) {
        triggeredOnLoad = true;
    }
    var winHeight = window.innerHeight;

    for (var i = 0; i < animationElements.length; i++) {
        var element = animationElements[i];
        var elementY = element.offsetTop;

        var difference = elementY - winHeight;

        if (scrollY >= difference) {
            if (!element.classList.contains("animation-triggered")) {
                element.classList.add("animation-triggered");
            }
        }
    }
}
