function toggleText(box) {
    var textElement = document.getElementById(box);
    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}

const button = document.getElementById("svg-img");
button.addEventListener("click", function() {
    this.classList.toggle("hover-effect");
});