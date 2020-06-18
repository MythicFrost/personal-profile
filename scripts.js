var scrollLastDate = new Date();
var animationElements = document.getElementsByClassName("animation-fade-in-slide-up");


var triggeredOnLoad = false;

window.addEventListener("load", function(e) {
    console.log("load");
    if (!triggeredOnLoad) {
        triggerAnimations();
    }
});

window.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOMContentLoaded");
    if (!triggeredOnLoad) {
        triggerAnimations();
    }
});

document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
        // alert("hi 2");
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

    console.log("scrollY" + scrollY);
    console.log("winHeight" + winHeight);

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
