// media screen side menu
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "400px";
        }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}

// moving name
var typed = new Typed (".auto-input",{
    strings: ["Ashiquzzaman"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})