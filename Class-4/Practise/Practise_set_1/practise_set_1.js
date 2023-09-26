// console.log("Hello world")

// console.log("This is coming first");
// setTimeout(() => {
//     console.log("This is coming at the last :( ")
// }, 3000);

// console.log("Now this is interesting, i am written at last but coming at second. Thanks to the asynchronus javascript");

function generateRandomString(length) {
    const characters = "mun";
    let randomString = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

// Promise Creation...

const myPromis = new Promise((resolve, reject) => {
    const s = generateRandomString(3);

    const name = "mun";

    if (s === name) {
        resolve({
            name: "Mehedi Hasan",
            address: "Dhaka",
            hobby: "Games"
        });
    } else {
        reject("Bad luck, bro.. ");
    }
});

//Consuming Phase

myPromis.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.error(error);
    })



// Multiple Promise Handling

const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
const promise2 = fetch('https://jsonplaceholder.typicode.com/todos/1');
const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1');


Promise.all([promise1, promise2, promise3, myPromis])
    .then((result) => {
        console.log("All executed", result);
    }).catch((error) => {
        console.error(error);
    });

Promise.any([promise1, promise2, promise3, myPromis])
    .then((result) => {
        console.log("All executed", result);
    }).catch((error) => {
        console.error(error);
    });
Promise.allSettled([promise1, promise2, promise3, myPromis])
    .then((result) => {
        console.log("All executed", result);
    }).catch((error) => {
        console.error(error);
    });
Promise.race([promise1, promise2, promise3, myPromis])
    .then((result) => {
        console.log("All executed", result);
    }).catch((error) => {
        console.error(error);
    });