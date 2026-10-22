function compareLogin(event){
    event.preventDefault();
    
    const USERNAME = "Clementine";
    const PASSWORD = "Clem12345";
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errMessage = document.getElementById("errorMessage").value;
    if(userName===USERNAME && Password ===Password){
        alert("Correct");
        window.location.href = "message.html";
    }else{[cite: 1]
        alert("Wrong");
        errMessage.textContent = "Invalid Username or Password!";
        
    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click',compareLogin);