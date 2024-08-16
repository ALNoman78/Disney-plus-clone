// function toggleText(box) {
//   var textElement = document.getElementById(box);
//   if (
//     textElement.style.display === "none" ||
//     textElement.style.display === ""
//   ) {
//     textElement.style.display = "block";
//   } else {
//     textElement.style.display = "none";
//   }
// }

// const button = document.getElementById("svg-img");
// button.addEventListener("click", function () {
//   this.classList.toggle("hover-effect");
// });

// let trendContent = document.querySelector(".width-2");
// let math = 0;
// trendContent.addEventListener("click", function () {
//   if (math === 0) {
//     trendContent.style.borderBottom = "3px solid red";
//     console.log("adsa");
//     math = 1;
//   } else {
//     trendContent.style.border = "none";
//     math = 0;
//   }
  
// });
// let contentTwo = document.getElementById("#content-2")
// contentTwo.addEventListener("click",function(){
//     contentTwo.style.display = "block"
//     console.log("Abdullah Al Noman");
// })

// let contentTwo = document.getElementById("content-2");
// let sum = 0;
// contentTwo.addEventListener("click", function () {
//   if (sum === 0) {
//     contentTwo.style.border = "2px solid red";
//     console.log("Abdullah ");
//   }
// });



// let contentMethod = document.querySelector("#content-2")



let trendVal = document.querySelector(".width-2")
let contentDis = document.querySelector("#content-2")
let widthContent = document.querySelector(".trend-content-image")
let widthONe = document.querySelector(".width")

let sum = 0;

trendVal.addEventListener("click",function(){
  if (sum === 0) {
    contentDis.style.display = "block";
    trendVal.style.borderBottom = "3px solid red"; 
    widthContent.style.display = "none";
    widthONe.style.borderBottom = "none"
    console.log("Abdullah AL nOman")
    sum = 1;
  }else{
    widthONe.style.borderBottom = "3px solid white"
    trendVal.style.borderBottom = "none"; 
    widthContent.style.display = "flex";
    contentDis.style.display = "none";
    console.log("Abdullah");
    sum = 0;
  }
  })


// let valueOne = document.querySelector(".width")
// let widthContent = document.querySelector(".trend-container")

// let callBack = 0;
// trendVal.addEventListener("Click",function(){
//   if ( callBack === 0) {
//     widthContent.style.display = "none";
//     console.log("monika");
//     callBack = 1;
//   } else {
    
//   }
// })