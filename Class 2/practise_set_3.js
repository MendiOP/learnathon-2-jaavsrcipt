const object = {
    message: "Hello, World!",

    getMessage() {
        const message = "Hello, Earth!";
        return this.message;
    }
};

console.log(object.getMessage());




function Pet(name) {

    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

const cat = new Pet("Dog");

console.log(cat.getName()); // What is output? Dog
const { getName } = cat;
console.log(getName());




var data = 4;
function callback() {
    console.log(this.data); // shows ??????? U N D E F I N E D
    console.log(data);
}

const object1 = {
    length: 5,

    method(callback) {
        callback();
    },
};

object1.method(callback);

console.log(this === global)


