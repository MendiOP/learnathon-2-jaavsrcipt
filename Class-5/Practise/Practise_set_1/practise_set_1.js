const person = {
    name: "Mehedi",
    age: 25,
    hasTheseCars: "No ",
    cars: [
        {
            name: "Toyota",
            models: [
                "Premio", "Allion", "Fortunar", "Corolla Axio"
            ]
        },
        {
            name: "Honda",
            models: [
                "Civic", "City", "Accord"
            ]
        },
        {
            name: "Tesla",
            models: [
                "X5", "Model E", "Model X"
            ]
        }
    ]
}

const carAndModelNames = [];

person.cars.forEach((carObjects) => {
    carObjects.models.forEach((modelNames) => {
        carAndModelNames.push(carObjects.name + " " + modelNames)
    });
});

console.log(carAndModelNames);


for (let keys in person) {
    console.log(keys + " " + person[keys]);
}

person.newAttribute = "This is new from outside class";

console.log(person)