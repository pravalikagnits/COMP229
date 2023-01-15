function iterateVar() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
function iterateLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // console.log(i); // error i is not defined
}

iterateVar();
iterateLet();


const constantVar = 10;
console.log(constantVar);

// constantVar =20; // varNLetNConst.js:21 Uncaught TypeError: Assignment to constant variable.
// console.log(constantVar);
