const numbers = [1, 2, 3, 4, 5, 6];

// squares
const squares = numbers.map(n => console.log(n * n));

// even numbers.
let evens = [];
numbers.forEach(n => {
    if (n % 2 === 0) {
        evens.push(n);
    }
});
console.log(evens);
