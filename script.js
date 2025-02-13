function openLetter() {
    document.getElementById('flap').style.transform = "rotateX(90deg)";
    document.getElementById('letter').style.transform = "translateY(-200px)";
}

function closeLetter() {
    document.getElementById('flap').style.transform = "rotateX(0deg)";
    document.getElementById('letter').style.transform = "translateY(200px)";
}