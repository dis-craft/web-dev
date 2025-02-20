function myFunction(a, b) {
    console.log(a/b);
    console.log("I am inside the function");
    return a+b;
}

myFunction();
myFunction(2, 3);
let result = myFunction(3,5);
console.log(`The value is: ${result}`);