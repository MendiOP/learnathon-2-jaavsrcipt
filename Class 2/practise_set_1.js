// 1. Write a JavaScript program to find the area of a triangle where three sides are a,b,c

function areaOfTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let ans = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return ans;
}

let ans = areaOfTriangle(3, 4, 5);
console.log(ans);

// //using arrow function
let area = (a, b, c) => {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(area(3, 4, 5));



// 2. Write a JavaScript program to reverse a array
let rotate = (arr) => {
    let l = arr.length;
    let i = 0, j = l - 1;

    while (i < j) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;

        i++;
        j--;
    }

    return arr;
}

console.log(rotate([1, 2, 3, 4, 5]));


// 3. Code for reversing an string
let reverseString = (s) => {
    let l = s.length;
    let str = "";
    for (let ch of s) {
        str = ch + str;
    }

    return str;
}

console.log(reverseString("munna"));


// 4. Write a JavaScript program to find out if 1st January will be a Sunday between two years.
let getTheDay = (year1, year2) => {
    for (let y = year1; y <= year2; y++) {
        let date = new Date(y, 0, 1);
        if (date.getDay() === 0) {
            console.log("Year " + y + " has Sunday in 1st january");
        }
    }
}

console.log(getTheDay(2000, 3000));


// 5. Write a JavaScript function that reverses a number
let reverseNumber = (number) => {
    let newNumber = 0;
    while (number != 0) {
        newNumber = newNumber * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return newNumber;
}

console.log(reverseNumber(123454434343));


// 6. Write a JavaScript function that checks whether a passed string is a palindrome or not
let isPalin = (s) => {
    let str = "";
    for (let ch of s) {
        str = ch + str;
    }

    return str === s;
}

console.log(isPalin("abcba"));


// 7. Write a JavaScript function that returns a string that has letters in alphabetical order.
let sortAlphaBetically = (s) => {
    const arr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let str = "";
    for (let i = 0; i < 26; i++) {
        str += String.fromCharCode(i + 'a'.charCodeAt(0)).repeat(arr[i]);
    }

    return str;
}

console.log(sortAlphaBetically("ggfsdsea"));


// 8. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string
let countLength = (s) => {
    let max = -1;
    let temp = 0;

    for (let ch of s) {
        if (ch !== ' ')
            temp++;
        else {
            max = Math.max(max, temp);
            temp = 0;
        }
    }

    return Math.max(max, temp);
}

console.log(countLength("This is a buggy Codeandyouknowit"));


// 9. Write a JavaScript function that accepts an argument and returns the type.
let whatType = (s) => {
    return typeof (s);
}
console.log(whatType('12342'));


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
let makeMatrix = (n) => {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
        matrix[i][i] = 1;
    }

    return matrix;
}

console.log(makeMatrix(5));

// 11. Write a JavaScript function to apply the Bubble Sort algorithm
let bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([1, 7, 1, 4, 1]));


// 12. Write a JavaScript function to find the longest substring in a given string without repeating characters.
let longestSubstring = (s) => {
    let visited = new Array(26).fill(false);

    let i = 0, j = 0;
    let max = 1;
    while (j < s.length) {
        if (!visited[s.charCodeAt(j) - 'a'.charCodeAt(0)])
            visited[s.charCodeAt(j) - 'a'.charCodeAt(0)] = true;
        else {
            while (visited[s.charCodeAt(j) - 'a'.charCodeAt(0)]) {
                visited[s.charCodeAt(i) - 'a'.charCodeAt(0)] = false;
                i++;
            }
        }

        visited[s.charCodeAt(j) - 'a'.charCodeAt(0)] = true;
        max = Math.max(max, j - i + 1);
        j++;
    }
    return max;
}

console.log(longestSubstring("thisisatest"));


// 13. Write a JavaScript program to pass a 'JavaScript function' as a parameter
let mainFunction = (s, paraFunction) => {
    return s + paraFunction();
}

let paraFunction = () => {
    return " And this is from the parameterized function";
}

console.log(mainFunction("This is going to the main function", paraFunction));