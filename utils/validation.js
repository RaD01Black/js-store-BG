const setCookie = (data) => {
    document.cookie = `token=${response.token}; max-age=${24 * 60 * 60}, path=/`;
};

export { setCookie };