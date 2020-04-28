const ham_menu = document.getElementById("ham-menu");
const nav_links = document.getElementById("nav-links");

ham_menu.addEventListener("click", event => {
    if (nav_links.style.display == "none") {
        nav_links.style.display = "flex";
    } else {
        nav_links.style.display = "none";
    }
});
