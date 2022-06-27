//Manipulate Arrays With push()
//добавляет элемент в конец массива
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//Manipulate Arrays With pop()
//удаляет последний элемент из массива myArray  и сохраняет его в переменную removedFromMyArray
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

//Manipulate Arrays With shift()
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

//Manipulate Arrays With unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//Shopping List
const myList = [["gfdfg",3,2,3,5],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];


//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
};
reusableFunction();

//Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
};
functionWithArgs(2,10)

//Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
};

timesFive(5)

//Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater"
    // Only change code above this line
    return outerWear;
}

myOutfit();


//Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);

    return arr.shift();
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



