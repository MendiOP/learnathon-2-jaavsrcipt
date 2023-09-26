function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
}

async function asyncCall() {
    console.log("calling");
    const result = await resolveAfter2Seconds();

    console.log(result);
}


asyncCall();

console.log("1");
setTimeout(() => {
    console.log("2");
});
console.log("23");


async function foo() {
    const result1 = await new Promise((resolve) =>
        setTimeout(() => resolve("1"))
    );

    const result2 = await new Promise((resolve) =>
        setTimeout(() => resolve("2"))
    );
}

foo();



//call back hell

const add = function (a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};


add(1, 2, (sum1) => {
    console.log("First Add");
    add(3, sum1, (sum2) => {
        console.log("Second Add");
        add(4, sum2, (sum3) => {
            console.log("Third Add");
            add(5, sum3, (sum4) => {
                console.log("Fourth Add");
                add(6, sum4, (sum5) => {
                    console.log("Fifth Add");
                    add(7, sum5, (sum6) => {
                        console.log("Sixth Add");
                        add(8, sum6, (sum7) => {
                            console.log("Seventh Add");
                            console.log("Sum of first 8 natural numbers using callback is " + sum7);
                        });
                    });
                });
            });
        });
    });
});




const addPromise = function (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
};

//one solution
addPromise(1, 2)
    .then((sum1) => {
        return addPromise(3, sum1);
    })
    .then((sum2) => {
        return addPromise(4, sum2);
    })
    .then((sum3) => {
        return addPromise(5, sum3);
    })
    .then((sum4) => {
        return addPromise(6, sum4);
    })
    .then((sum5) => {
        return addPromise(7, sum5);
    })
    .then((sum6) => {
        return addPromise(8, sum6);
    })
    .then((sum7) => {
        console.log("Sum of first 8 natural numbers using callback is " + sum7);
    })
    .catch((error) => {
        console.error(error.message);
    });


// another solution

async function add() {
    try {
        const sum1 = await addPromise(1, 2);
        const sum2 = await addPromise(3, sum1);
        const sum3 = await addPromise(4, sum2);
        const sum4 = await addPromise(5, sum3);
        const sum5 = await addPromise(6, sum4);
        const sum6 = await addPromise(7, sum5);
        const sum7 = await addPromise(8, sum6);
        console.log("Sum of first 8 natural numbers using async / await is ", sum7);
    } catch (error) {
        console.error(error.message)
    }
}

add();




//একটি function লিখ যেটি একটা সংখ্যা ইনপুট হিসেবে নিবে এবং একে অন্য একটি function এর ভেতর callback আকারে পাঠিয়ে কল করবে এবং নিম্নোক্ত ফলাফল দেখাবে।
//   1
//   2
//   3

const print = function (inputNumber, callback) {
    setTimeout(() => {
        return callback(inputNumber + 1);
    }, 1000)
}

print(0, (inputNumber) => {
    console.log(inputNumber);
    print(inputNumber, (inputNumber) => {
        console.log(inputNumber);
        print(inputNumber, (inputNumber) => {
            console.log(inputNumber);
        });
    });
});





//optimize the below code

function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        sleep(3000).then(() => {
            resolve(x + y);
        });
    });
}
let s = performance.now();
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
});
let e = performance.now();

console.log("Time take by using promise and delay " + e - s);

//using async/await we can increase the readability of the code
function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

async function sumAsync(x, y) {
    await sleep(3000);
    return (x + y);
}

async function addNumbers(x, y) {
    try {
        let sum = await sumAsync(x, y);
        console.log(sum);

    } catch (error) {
        console.log("Theres an error " + error);
    }
}

let s1 = performance.now();
addNumbers(12, 42);
let e1 = performance.now();

console.log("Time taken using asysnc and await is " + e1 - s1);