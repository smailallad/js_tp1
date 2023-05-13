import App from "./modules/App.js";
const app = new App();
//
// FORM RECHERCHER
const searchButtonEl = document.querySelector("#searchForm button");
searchButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    app.showProducts();
});
//
// TRI
const sort = document.querySelector("#sort");
sort.addEventListener('change', () => app.showProducts())
//
// FILTRE
const categoryEl = document.getElementsByName("category");
for (const category of categoryEl) {
    category.addEventListener('click', () => { app.showProducts(); });
}
const priceEl = document.getElementsByName("price");
for (const price of priceEl) {
    price.addEventListener('click', () => { app.showProducts(); });
}
//
// DISPLAY GRID OU LINE
var radios = document.querySelectorAll('input[type=radio][name="display"]');
for (let radio of radios) {
    radio.addEventListener('click', () => {
        const main = document.querySelector("main");
        if (radio.value == "grid") {
            main.classList.add("grid");
        } else {
            main.classList.remove("grid");
        }
    })
};
