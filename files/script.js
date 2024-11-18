function dropdownContentButton(name){
    var content = document.getElementById(name);
    if (content.style.display === "none"){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
}
function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "jovany.cardena"){
        if (username === "jovany.cardena" && password === "adminUser2014"){
            // Welcome user logged in!
            console.log("Correct Credentials! Welcome: " + username);
            let x = "https://jovanycardenasvargas.org/dashboard/" + username;
            window.open(x);
        }else{
            console.error("Invalid Credentials!!!");
        }
    }
}