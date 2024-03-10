
function changeContent() {
    var animatedDiv = document.getElementById("more");
    var replacementDiv = document.getElementById("register");

    animatedDiv.style.transform = "translateX(-100%)";
    replacementDiv.style.opacity = 1;
}

function admin(){
    var content = document.getElementById("admin_register");
    // var second_div = document.getElementById("voter_register");
    // second_div.style.opacity = 0;
    var body = document.querySelector('body');
    // body.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))";
    body.style.backdropFilter = "blur(10px)";
    // body.style.w
    // -webkit-backdrop-filter: blur(10px);
}