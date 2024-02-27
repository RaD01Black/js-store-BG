import { getCookie } from "./utils/cookie.js"
import { getData } from "./utils/httpReq.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");

const showProducts = () => {}

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