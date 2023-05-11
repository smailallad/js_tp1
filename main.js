import App from "./modules/App.js";

const app = new App();


// RECHERCHER
const searchInputEl = document.querySelector("input[name='search']");
const searchButtonEl = document.querySelector("#searchForm button");
searchButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    const searchString = searchInputEl.value;
    console.log(searchString);
    app.searchProducts(searchString);
});

// Display
var radios = document.querySelectorAll('input[type=radio][name="display"]');
for (let radio of radios) {
    radio.addEventListener('click', () => {
        const main = document.querySelector("main");
        if (radio.value == "grid") {
            main.setAttribute("style", "display: grid;grid-template-columns: repeat(2, 1fr);");
        } else {
            main.removeAttribute("style", "display: grid;grid-template-columns: repeat(2, 1fr);");
        }
    })
};
//******************************

