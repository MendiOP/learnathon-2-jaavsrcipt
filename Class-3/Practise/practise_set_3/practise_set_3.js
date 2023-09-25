const redDiv = document.querySelector("#red");
const greenDiv = document.querySelector("#green");
const skyblueDiv = document.querySelector("#skyblue");
const blueDiv = document.querySelector("#blue");
const purpleDiv = document.querySelector("#purple");
const goldDiv = document.querySelector("#gold");

// Event Bubbling Phase
redDiv.addEventListener("click", () => {
    console.log("Red box clicked.");
}, false)
greenDiv.addEventListener("click", () => {
    console.log("Green box clicked");
}, true) // what happens???
skyblueDiv.addEventListener("click", () => {
    console.log("Skyblue box clicked");
}, false)

// Event Capturing Phase
blueDiv.addEventListener("click", () => {
    console.log("Blue box clicked.");
}, true)
purpleDiv.addEventListener("click", () => {
    console.log("Purple box clicked");
}, true)
goldDiv.addEventListener("click", () => {
    console.log("Golden box clicked");
}, true)