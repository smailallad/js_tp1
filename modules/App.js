import products from "../data/products.js";
export default class App {
    #products;
    constructor() {
        this.#products = products;
        this.showProducts(this.#products);
        this.#displayFiltre();
    }
    //
    // AFFICHAGE LISTE DES PRODUITS
    #displayProducts(products) {
        const mainEl = document.querySelector("main");
        mainEl.innerHTML = "";
        products.forEach(product => {
            const articleEl = document.createElement("article");
            articleEl.innerHTML = `
                <img src="${product.image}" alt="Image for ${product.title}" width="80" height="100">
                <h2>${product.title}</h2>
                <ul>
                <li><span>prix: </span>${product.price}</li>
                <li><span>Categorie: </span>${product.category}</li>
                <li><span>Description:</span> ${product.description}</li>
                </ul>
                `;
            mainEl.appendChild(articleEl);
        });
    }
    //
    // AFFICHAGE FILRE PAR CATEGORIE ET PAR PRIX
    #displayFiltre() {
        const categories = Array();
        const prices = Array();
        const categoryFilter = document.querySelector('.categoryFilter');
        const priceFilter = document.querySelector('.priceFilter');
        for (let product of this.#products) {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            }
            if (!prices.includes(product.price)) {
                prices.push(product.price)
            }
        }
        // AFFICHE CATEGORIE PAR ORDRE CROISSANT
        categories.sort((a, b) => { return a <= b })
        for (const category of categories) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = `category`;
            checkbox.value = category;
            const label = document.createElement('label');
            label.innerText = category;
            const newline = document.createElement('br');
            categoryFilter.appendChild(checkbox);
            categoryFilter.appendChild(label);
            categoryFilter.appendChild(newline)
        }
        // AFFICHAGE PRIX PAR ORDRE CROISSANT
        prices.sort((a, b) => { return a <= b });
        for (const price of prices) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = `price`;
            checkbox.value = price;
            const label = document.createElement('label');
            label.classList.add("list");
            label.innerText = price;
            priceFilter.appendChild(checkbox);
            priceFilter.appendChild(label);
        }
    }
    //
    // RECHERCHE D'UN PRODUITS SELON LE TITRE SANS TENIR COMPTE DE LA CASSE
    #searchProducts(products) {
        const searchInputEl = document.querySelector("input[name='search']");
        const searchString = searchInputEl.value;
        let listProducts = products.filter((product) => {
            return (product.title).toLowerCase().includes(searchString.toLowerCase());
        });
        return listProducts;
    }
    //
    // TRIE LES PRODUITS PAR CATEGORIE OU PAR PRIX
    #sortproducts(products) {
        const sort = document.querySelector("#sort");
        switch (sort.selectedIndex) {
            case 0:
                return products.sort((a, b) => { return a.category <= b.category });
            case 1:
                return products.sort((a, b) => { return a.category >= b.category });
            case 2:
                return products.sort((a, b) => { return a.price <= b.price });
            case 3:
                return products.sort((a, b) => { return a.price >= b.price });
        }
    }
    //
    // FILTRE LES PRODUITS PAR CATEGORIE OU PAR PRIX
    #filterProducts(products) {
        const categoryEl = document.getElementsByName("category");
        let categoryFiltre = [];
        for (const cat of categoryEl) {
            if (cat.checked) { categoryFiltre.push(cat.value); }
        }
        const priceEl = document.getElementsByName("price");
        let priceFilter = [];
        for (const price of priceEl) {
            if (price.checked) {
                priceFilter.push(price.value);
            }
        }
        if (priceFilter.length == 0) {
            if (categoryFiltre.length == 0) {
                return products;
            } else {
                let listProducts = products.filter(product => {
                    return categoryFiltre.find(element => element == product.category);
                })
                return listProducts;
            }
        } else {
            if (categoryFiltre.length == 0) {
                let listProducts = products.filter(product => {
                    return priceFilter.find(element => element == product.price);
                })
                return listProducts;
            } else {
                let listProducts = products.filter(product => {
                    return categoryFiltre.find(element => element == product.category) && priceFilter.find(elementp => elementp == product.price);
                })
                return listProducts;
            }
        }
    }
    //
    // FONCTION APPELER DS main.js A CHAQUE EVENEMENT SUR LES PRODUIS
    showProducts() {
        let products = this.#products;
        products = this.#searchProducts(products);
        products = this.#filterProducts(products)
        products = this.#sortproducts(products);
        this.#displayProducts(products);
    }
}