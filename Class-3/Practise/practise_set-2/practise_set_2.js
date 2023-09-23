const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")
// bubbling
grandparent.addEventListener("click", (e) => {
    console.log("Grandparent clicked");
})
// bubbling
parent.addEventListener("click", (e) => {
    console.log("Parent clicked");
    e.stopPropagation()
})
// bubbling
child.addEventListener("click", (e) => {
    console.log("Child clicked");
})