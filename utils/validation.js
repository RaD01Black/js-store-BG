const validateUsername = (username) => {
    const regex = /^[a-zA-Z\d_]{4,16}$/;
    const result = regex.test(username);
    return result;
};

const validatePassword = (password) => {
    const regex = /^.{4,16}$/;
    const result = regex.test(password);
    return result;
};

const validateForm = (username, password) => {
    console.log(username, password)
}