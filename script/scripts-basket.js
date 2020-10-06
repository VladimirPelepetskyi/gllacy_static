var basketfulllink = document.querySelector(".basket-link-full");

var basketpopup = document.querySelector(".modal-basket");

basketfulllink.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketpopup.classList.add("modal-basket-show");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (basketpopup.classList.contains("modal-basket-show")) {
            basketpopup.classList.remove("modal-basket-show");
        }
    }
});