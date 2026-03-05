//javascript for smartphone menu button toggle
var menuOn = false;



function toggleMenu()
{
    var menu = document.getElementById("main-menu");
    
    if(menuOn == false)
    {
        menu.style.display = "block";
        menuOn = true;
    }
    else
    {
        menu.style.display = "none";
        menuOn = false;
    }
    return false;
}