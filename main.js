import { halfOfX, multiply } from "./lib.js";
import doSomething from "./doSomething.js";
import { flag, touch } from './validator.js';
import { defaultParamEg } from "./default.js";

console.log(halfOfX(84));
console.log(multiply(21, 2));
doSomething();

console.log(flag);
touch();
console.log(flag);

console.log(defaultParamEg(3));
console.log(defaultParamEg(6,5));
