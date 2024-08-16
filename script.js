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


let trendContent = document.querySelector(".width-2");
let math = 0;
trendContent.addEventListener("click",function(){
    if (math === 0) {
        trendContent.style.borderBottom = "3px solid red";
        console.log("adsa")
        math = 1;

    }else{
        trendContent.style.border = "none";
        math = 0;
    }
})

// let contentTwo = document.getElementById("#content-2")
// contentTwo.addEventListener("click",function(){
//     contentTwo.style.display = "block"
//     console.log("Abdullah Al Noman");
// })