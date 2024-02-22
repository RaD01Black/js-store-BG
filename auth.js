import { postData } from "./utils/httpReq.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");


const submitHandler = async (event) => {
    event.preventDefault();

    const username = inputsBox[0].value;
    const password = inputsBox[1].value;


    const response = await postData("auth/login", {
        username,
        password,
    });
    document.cookie = `token=${response.token}; max-age=${24 * 60 * 60}, path=/`;
    location.assign("index.html");
};

loginButton.addEventListener("click", submitHandler);