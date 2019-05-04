const ham_menu = document.querySelector("#ham-menu");
const nav_links = document.querySelector("#nav-links");

ham_menu.addEventListener("click", event => {
    if (nav_links.style.display == "none") {
        setDisplay("flex");
    } else {
        setDisplay("none");
    }
});

function setDisplay(val) {
    nav_links.style.display = val;
}
