class StoreLogin{
    /*
        Classe que armazena e verifica
        as credenciais de login e register
        do jogador.
    */
    #email;
    #password;

    constructor(email, password){
        this.#email = email;
        this.#password = password;
    }

    getEmail(){
        return this.#email;
    }
    setEmail(newEmail){
        this.#email = newEmail;
    }

    getPassword(){
        return this.#password;
    }
    setPassword(newPassword){
        this.#password = newPassword;
    }

    
    save(){
        if(this.#email && this.#password){
            localStorage.setItem("email", this.#email);
            localStorage.setItem("password", this.#password);
            return true;
        }

        return false;
    }

    verifyCredentials(){
       const email = localStorage.getItem("email");
       const password = localStorage.getItem("password");
       if(email == this.#email && password == this.#password){
            return true;
       }
       return false;
    }

}


// status do DOM.
document.addEventListener("DOMContentLoaded", ()=>{
    //register
    try{
        const btnRegister = document.getElementById("btnRegister");
        btnRegister.addEventListener("click", ()=>{
            const email = document.getElementById("inputEmail").value;
            const password = document.getElementById("inputPassword").value;
            const store = new StoreLogin(email, password);

            if(store.save()){
                const alert = document.getElementById("registerAlertSuccess");
                alert.style.display = "block";
                setTimeout(()=>{
                    window.location.href = "index.html";
                }, 3000);
            }else{
                const alert = document.getElementById("registerAlertFail");
                alert.style.display = "block";
                setTimeout(()=>{
                    alert.style.display = "none";
                }, 5000);
            }        
        });
    }catch(e){

    }
    

    //login
    try {
        const btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.addEventListener("click", ()=>{
            const email = document.getElementById("inputEmail").value;
            const password = document.getElementById("inputPassword").value;
            const store = new StoreLogin(email, password);

            if(store.verifyCredentials()){
                const alert = document.getElementById("loginAlertSuccess");
                alert.style.display = "block";
                setTimeout(()=>{
                    window.location.href = "storyboard-scene-1.html";
                }, 3000);
            }else{
                const alert = document.getElementById("loginAlertFail");
                alert.style.display = "block";
                setTimeout(()=>{
                    alert.style.display = "none";
                }, 5000);
            }
    });
    } catch (error) {
        
    }

});