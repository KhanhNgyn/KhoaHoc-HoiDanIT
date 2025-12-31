

const usernameElement = document.getElementById("username");

const passwordElement = document.getElementById("password");

const btnLogin = document.getElementById("btn");

btnLogin.addEventListener("click", () => {
    const username = usernameElement.value;
    const password = passwordElement.value;

    if (username === "khanh@gmail.com" && password === "12345") {
        alert("Dang nhap thanh cong!");
        window.location.href = "success.html"
    } else {
        alert("Tai khoan hoac mat khau sai!");
        usernameElement.style.borderColor = "red";
        passwordElement.style.borderColor = "red";
    }
})

