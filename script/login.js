const $loginForm = document.querySelector("#login-form")
const $passwordInput = document.querySelector("#password-input")
const $emailInput = document.querySelector("#email-input")



function User(e,p){
    this.email = e 
    this.password = p 
 }

 const ToastifyPanel = (message,type) => {
    return Toastify({
        className: type === "success" ? "success" : "error",
        text:message ,
        duration: 3000
        })
}
 

const loginUser = (e) => {
    e.preventDefault()

    const user = new User($emailInput.value, $passwordInput.value);

    fetch("https://api.escuelajs.co/api/v1/auth/login" , {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
             if(data && data.access_token){
                

                localStorage.setItem("token" , data.access_token);
                ToastifyPanel("Successfully logged in", "success").showToast()
                setTimeout(() => {
                    location.replace(window.location.origin + "/index.html")
                },2000)

             }
        })
        .catch(() => {
            ToastifyPanel("Error occurred while logging in", "error").showToast();
        })

    
        


    
}



$loginForm.addEventListener("submit", loginUser)