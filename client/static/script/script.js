
function changeContent() {
    var animatedDiv = document.getElementById("more");
    var replacementDiv = document.getElementById("register");

    animatedDiv.style.transform = "translateX(-100%)";
    replacementDiv.style.opacity = 1;
}

function admin(){
    var content = document.getElementById("admin_register");
    var second_div = document.getElementById("voter_register");
    second_div.style.opacity = 0;
}