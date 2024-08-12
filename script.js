function toggleText(box) {
    var textElement = document.getElementById(box);
    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}
