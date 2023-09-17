// 1. Write a JavaScript program that iterates integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
//For numbers multiples of both three and five print "FizzBuzz".

let FizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0)
            console.log(i + " Fizzbuzz");
        else if (i % 5 === 0)
            console.log(i + " Buzz");
        else if (i % 3 === 0)
            console.log(i + " Fizz")
    }
}

FizzBuzz();

// 2. Write code for checking happy number
let happyHappyHappyy = (n) => {
    let list = [];
    if (n == 1)
        return true;

    while (n != 1 && !list.includes(n)) {
        list.push(n);
        s = 0;
        while (n != 0) {
            s += n % 10;
            n = Math.floor(n / 10);
        }

        n = s;
    }

    return n == 1;
}

console.log(happyHappyHappyy(19));


// 3. Write a JavaScript function to check whether an `input` is an array or not.
let isArray = (arr) => {
    return Array.isArray(arr);
}

console.log(isArray([1, 2, 3, 4]));
console.log(isArray(['a']));
console.log(isArray("munna"));


// 4. Write a JavaScript function to clone an array.
let cloneArray = (arr) => {
    let clonedArray = [...arr];
    //let clonedArray = Array.from(arr);
    console.log(clonedArray);
}

cloneArray([2, 3, 4, 5]);


// 5. Write a JavaScript function to get the first element of an array. 
//Passing the parameter 'n' will return the first 'n' elements of the array.

let getElement = (arr, n) => {
    if (n == null)
        return arr[0];

    if (n < 0)
        return [];

    return arr.slice(0, n);
}

console.log(getElement([4, 5, 6, 7, 8,], 4));

// 6.  Write a JavaScript function to filter false, null, 0 and blank values from an array
let doFilter = (arr) => {
    let set = [false, null, 0, ""];

    arr = arr.filter(function (item) {
        if (!set.includes(item))
            return item;
    });

    return arr;
}

console.log(doFilter([58, '', 'abcd', true, null, false, 0]))

// 7. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
let sum = (arr) => {
    let s = 0;
    for (let item of arr) {
        if (Number.isInteger(item)) s += item;
    }
    return s;
}

console.log(sum([2, "11", 3, "a2", false, 5, 7, 1]))


// 8. Write a JavaScript program to count the number of arrays inside a given array.
let totalArray = (arr) => {
    // let s = 0;
    // arr.forEach(function(item){
    //     if(Array.isArray(item)) s++;
    // });

    //return s;

    // return arr.reduce(function(count, item){
    //     return count + (Array.isArray(item) ? 1 : 0)
    // },0);

    return arr.filter(function (item) {
        if (Array.isArray(item))
            return true;
    }).length;
}

console.log(totalArray([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]))