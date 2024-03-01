import { getCookie } from "./utils/cookie.js"
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFunc.js";

let allProduts = null;

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");
const searchButton = document.querySelector("button");
const inputBox = document.querySelector("input");
const listItems = document.querySelectorAll("li");

const showProducts = (products) => {
    mainContent.innerHTML = "";

    products.forEach((product) => {
        const JSX = `
        <div>
        <img alt=${product.title} src=${product.image} />
        <h4>${shortenText(product.title)}</h4>
        <div id="price">
        <p>$ ${product.price}</p>
        <button>
        BUY
        <i class="fa-solid fa-cart-shopping"></i>
        </button>
        </div>
        <div id="rate">
        <i class="fa-solid fa-star"></i>
        <span>${product.rating.rate}</span>
        </div>
        <div id="count">
        <i class="fa-solid fa-user"></i>
        <span>${product.rating.count}</span>
        </div>
        </div>
        `;

        mainContent.innerHTML += JSX;
    });

}

const init = async () => {
    const cookie = getCookie();

    if(cookie) {
        loginButton.style.display = "none"; 
    } else {
        dashboardButton.style.display = "none";
    }

    allProduts = await getData("products");
    showProducts(allProduts)
};

const searchHandler = () => {
    const query = inputBox.value.trim().toLowerCase();

    if (!query) showProducts(allProduts);
    const filteredProducts = allProduts.filter((product) => product.title.toLowerCase().includes(query));
    showProducts(filteredProducts);
};

const filterHandler = (event) => {
    const category = event.target.innerText.toLowerCase();

    listItems.forEach((li) => {
        if (li.innerText.toLowerCase() === category) {
            li.className = "selected";
        } else {
            li.className= "";
        }
    });

    if (category === "all") return showProducts(allProduts);

    const filteredProducts = allProduts.filter(
        (product) => product.category.toLowerCase() === category
    );


    showProducts(filteredProducts);
    console.log(showProducts)
};


document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listItems.forEach((li) => li.addEventListener("click" ,filterHandler));