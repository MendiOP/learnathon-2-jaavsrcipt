let mainElement = document.getElementsByClassName("mainComponent"); // it returns a html collection.
console.log(mainElement);

console.log(typeof (document.body)) //object
console.dir(document.body)

document.title = "Manipulating the Title from JS"
for (let element of document.all) {
    console.log(element)
}

//all elements are object
console.log(document.getElementById("tableContent"));

//changing the content of header element
let headerElement = document.getElementById("header");
headerElement.textContent = "Changed from JS using TC";
headerElement.innerText = "Changed from JS using IT"
headerElement.innerHTML = "Changed from JS using IH"

console.log(headerElement.textContent); // it shows, what text is written in the html code
console.log(headerElement.innerHTML);// it gives the entire html code
console.log(headerElement.innerText);// it shows, what is shown in browser after rendering

headerElement.style.fontSize = '15px'

let para = document.getElementById("paraID")
let items = para.getElementsByClassName("button") // only changes the classes of paraID. Interesting
for (let i = 0; i < items.length; i++) {
    items[i].style.color = "blue"
}

let tags = document.getElementsByTagName("td");
for (let i = 0; i < tags.length; i++) {
    tags[i].style.fontWeight = "bolder"
}

//Qeury Seelctors

let q = document.querySelectorAll(".button")
console.log(q);


//adding and removing class from a element
let t = document.querySelector("#tableContent")
t.classList.add("ClassfromJS");

if (t.classList.contains("ClassfromJS")) {
    console.log(t.className)
}
let newT = document.querySelector(".ClassfromJS");
console.log(newT);

//removing
t.classList.remove("ClassfromJS");
console.log(t.classList.contains("ClassfromJS"));
newT = document.querySelector(".ClassfromJS");
console.log(newT); //false beacuase its deleted before

//checking as a child
let mainComponent = document.querySelector(".mainComponent");
let childComponent = document.querySelector(".button")

if (mainComponent.contains(childComponent)) {
    console.log("Yes, confirm")
} else {
    console.log("NO")
}

//appending as a child 

let table = document.getElementById("table1");
let newRow = document.createElement("tr");
let nameCell = document.createElement("td");
nameCell.textContent = "Tajnur Vai";

let deptCell = document.createElement("td");
deptCell.textContent = "CSE";

let courseCell = document.createElement("td");
courseCell.textContent = "Course Superviser";

newRow.appendChild(nameCell);
newRow.appendChild(deptCell);
newRow.appendChild(courseCell);

table.appendChild(newRow);