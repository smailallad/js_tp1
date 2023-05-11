import products from "../data/products.js";
export default class App {
    #products;
    constructor() {
        this.#products = products;
        this.#displayProducts(this.#products);
        this.#displayFiltre();
    }
    // AFFICHAGE
    #displayProducts(products) {
        const mainEl = document.querySelector("main");
        mainEl.innerHTML = "";
        //const ulEl = document.createElement("ul");
        products.forEach(product => {
            //const liEl = document.createElement("li");
            // on pourrait mettre le code suivant dans une classe à part et appeler la méthode qui créé chaque code html par produit
            const articleEl = document.createElement("article");
            articleEl.classList.add("grille");
            articleEl.innerHTML = `
                <img src="${product.image}" alt="Image for ${product.title}" width="80" height="100">
                <h2>${product.title}</h2>
                <ul>
                <li><span>prix: </span>${product.price}</li>
                <li><span>Categorie: </span>${product.category}</li>
                <li><span>Description:</span> ${product.description}</li>
                </ul>
                `;
            //liEl.appendChild(articleEl);
            //ulEl.appendChild(liEl);
            mainEl.appendChild(articleEl);
        });
        //mainEl.appendChild(ulEl);
    }
    #displayFiltre() {
        const category = Array();
        const price = Array();
        const categoryFilter = document.querySelector('.categoryFilter');
        const priceFilter = document.querySelector('.priceFilter');
        for (let product of this.#products) {
            if (!category.includes(product.category)) {
                category.push(product.category)
                const radiobox = document.createElement('input');
                radiobox.type = 'radio';
                radiobox.name = `category`;
                radiobox.value = product.category;
                const label = document.createElement('label')
                label.innerText = product.category;
                const newline = document.createElement('br');
                categoryFilter.appendChild(radiobox);
                categoryFilter.appendChild(label);
                categoryFilter.appendChild(newline)
            }
            if (!price.includes(product.price)) {
                price.push(product.price)
                const radiobox = document.createElement('input');
                radiobox.type = 'radio';
                radiobox.name = `price`;
                radiobox.value = product.price;
                const label = document.createElement('label')
                label.innerText = product.price;
                const newline = document.createElement('br');
                priceFilter.appendChild(radiobox);
                priceFilter.appendChild(label);
                priceFilter.appendChild(newline)
            }
        }
    }
    // RECHERCHE
    /**
     * 
     * @param {string} searchString - Chaine selon laquelle effectuer la recherche
     * @returns Products
     */
    searchProducts(searchString) {
        let results;
        results = this.#products.filter((product) => {
            return product.title.includes(searchString);
        });
        this.#displayProducts(results);
    }
    // TRI

    // FILTRE
    filterProducts(categoryFiltre, priceFilter) {

    }



}