const backButton = document.getElementById("game-time");

backButton.onclick = (evt) => {
    location.href = "./game.html";
}




function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}