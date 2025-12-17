// Headers script

let ul = document.getElementById("login-ul");
let ul1 = document.getElementById("login-ul1");
let ul2 = document.getElementById("login-ul2");
let arrow = document.getElementById("arrow");
let menuul=document.getElementById("menu-ul")




ul.style.maxHeight = "0px"

function togglemenu() {

    if (ul.style.maxHeight == "0px") {
        ul.style.maxHeight = "300px"
        ul.style.transition = "all 0.5s ease"
        arrow.style.transform = "rotateY(90deg)"


        setTimeout(() => {
            arrow.style.transform = "rotate(180deg)";
        }, 250);

    }
    else {
        ul.style.maxHeight = "0px"
        arrow.style.transform = "rotateY(90deg)"


        setTimeout(() => {
            arrow.style.transform = "rotate(0deg)";
        }, 250);

    }
}


ul1.style.maxHeight = "0px"

function toggledot() {

    if (ul1.style.maxHeight == "0px") {
        ul1.style.maxHeight = "300px";
    }
    else {
        ul1.style.maxHeight = "0px"
    }
}

ul2.style.maxHeight = "0px"

function toggledot2() {

    if (ul2.style.maxHeight == "0px") {
        ul2.style.maxHeight = "300px";
    }
    else {
        ul2.style.maxHeight = "0px"
    }
}





menuul.style.maxHeight = "0px"

function menubtn() {

    if (menuul.style.maxHeight == "0px") {
        menuul.style.maxHeight = "300px";
    }
    else {
        menuul.style.maxHeight = "0px"
    }
}