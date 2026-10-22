function compareLogin(event) {
    event.preventDefault();

    const USERNAME = "Clem";
    const PASSWORD = "123";
    
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errMessage = document.getElementById("errMessage");

    if (userName === USERNAME && password === PASSWORD) {
        alert("Correct");
        window.location.href = "message.html";
    } else {
        alert("Wrong");
        errMessage.textContent = "Invalid Username or Password!";
    }
}

const myLogInButton = document.getElementById("btnLogin");
myLogInButton.addEventListener("click", compareLogin);
