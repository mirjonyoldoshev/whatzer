const $regesterForm = document.querySelector("#regester-form");
const $nameInput = document.querySelector("#name-input")
const $emailInput = document.querySelector("#email-input")
const $passwordInput = document.querySelector("#password-input")
const $avatarInput = document.querySelector("#avatar-input")


function User(n,e,p,a){
    this.name = n 
    this.email = e 
    this.password = p 
    this.avatar = a
}

const ToastifyPanel = (message,type) => {
    return Toastify({
        className: type === "success" ? "success" : "error",
        text:message ,
        duration: 3000
        })
}

const registerNewUser = (e) => {
    e.preventDefault(); 
    const newUser = new User($nameInput.value, $emailInput.value, $passwordInput.value, $avatarInput.value)

    fetch("https://api.escuelajs.co/api/v1/users/" , {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
         body:JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(data => {
            if(data.id){
                ToastifyPanel("Successfully registered", "success").showToast();
                setTimeout(() => {
                    location.replace(window.location.origin + "/pages/login.html")
                },2000)
            }
        })
       
        .catch(() => {
            ToastifyPanel("Error occurred while logging in", "error").showToast();
        })
    }
    


// Eventlistners

$regesterForm.addEventListener("submit" , registerNewUser)