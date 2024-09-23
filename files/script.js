function dropdownContentButton(name){
    var content = document.getElementById(name);
    if (content.style.display === "none"){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
}