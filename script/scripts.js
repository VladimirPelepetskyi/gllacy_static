var loginlinkpopup = document.querySelector(".login-link");

var loginpopup = document.querySelector(".modal-login");

loginlinkpopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginpopup.classList.add("modal-login-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (loginpopup.classList.contains("modal-login-show")) {
            loginpopup.classList.remove("modal-login-show");
        }
    }
});

var searchlink = document.querySelector(".search-button");

var searchpopup = document.querySelector(".search-input-bgc");

searchlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchpopup.classList.add("search-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (searchpopup.classList.contains("search-show")) {
            searchpopup.classList.remove("search-show");
        }
    }
});

var contactslink = document.querySelector(".contacts-button");

var feedbackpopup = document.querySelector(".feedback");

var feedbackclose = document.querySelector(".modal-close");

var overlay = document.querySelector(".container");

contactslink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackpopup.classList.add("feedback-show");
    overlay.classList.add("overlay");
});

feedbackclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackpopup.classList.remove("feedback-show");
    overlay.classList.remove("overlay");

});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedbackpopup.classList.contains("feedback-show")) {
            feedbackpopup.classList.remove("feedback-show");
            overlay.classList.remove("overlay");
        }
    }
});

var slidercontrol1 = document.querySelector(".slider-controls-item-1");
var slidercontrol2 = document.querySelector(".slider-controls-item-2");
var slidercontrol3 = document.querySelector(".slider-controls-item-3");


var slide1 = document.querySelector(".si-1");
var slide2 = document.querySelector(".si-2");
var slide3 = document.querySelector(".si-3");


var innercolor = document.querySelector(".index-page");



slidercontrol1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slider-none");
    slide1.classList.add("slider-show");
    slide2.classList.add("slider-none");
    slide2.classList.remove("slider-show");
    slide3.classList.add("slider-none");
    slide3.classList.remove("slider-show");
    innercolor.classList.add("bgc-1");
    innercolor.classList.remove("bgc-2");
    innercolor.classList.remove("bgc-3");

})

slidercontrol2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("slider-none");
    slide1.classList.remove("slider-show");
    slide2.classList.add("slider-show");
    slide2.classList.remove("slider-none");
    slide3.classList.add("slider-none");
    slide3.classList.remove("slider-show");
    innercolor.classList.remove("bgc-1");
    innercolor.classList.add("bgc-2");
    innercolor.classList.remove("bgc-3");
})

slidercontrol3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("slider-none");
    slide1.classList.remove("slider-show");
    slide2.classList.add("slider-none");
    slide2.classList.remove("slider-show");
    slide3.classList.remove("slider-none");
    slide3.classList.add("slider-show");
    innercolor.classList.remove("bgc-1");
    innercolor.classList.remove("bgc-2");
    innercolor.classList.add("bgc-3");
});
