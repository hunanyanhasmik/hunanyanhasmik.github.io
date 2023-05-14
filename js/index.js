window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});





const burgerMenu = document.querySelector(".burger__menu");
const dropDown = document.querySelector(".drop-down__menu");


burgerMenu.addEventListener("click", () => {
    dropDown.classList.toggle("active");

    if (dropDown.classList.contains("active")) {
        burgerMenu.classList.add("active");
    } else {
        burgerMenu.classList.remove("active");
    }
});