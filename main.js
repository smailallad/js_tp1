import App from "./modules/App.js";

const app = new App();


// RECHERCHER
const searchInputEl = document.querySelector("input[name='search']");
const searchButtonEl = document.querySelector("#searchForm button");
searchButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    const searchString = searchInputEl.value;
    app.searchProducts(searchString);
});

// DISPLAY
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
// FILTRE
const categoryEl = document.getElementsByName("category");
console.log(categoryEl);
categoryEl.addEventListener('click', app.categoryFilter());
// TRI
//******************************
