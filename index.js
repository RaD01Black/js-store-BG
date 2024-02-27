import { getCookie } from "./utils/cookie.js"
import { getData } from "./utils/httpReq.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products")

const showProducts = (products) => {
    mainContent.innerHTML = "";

    products.forEach((product) => {
        const JSX = `
        <div>
        <img alt=${product.title} src=${product.image} />
        <h4>${product.title}</h4>
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

    const allproduts = await getData("products");
    showProducts(allproduts)
};

document.addEventListener("DOMContentLoaded", init);