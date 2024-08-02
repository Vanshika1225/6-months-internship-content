// String

// Length method

// let str="Hey , see there";
// console.log(str.length);

let str=new String("Hey , see there");
let str1=new String("Hey , see there");
console.log(str===str1)

// charAt
console.log(str.charAt(7));

// charCodeAt
console.log(str.charCodeAt(7));

// concat
console.log(str.concat(str1))

// constrctor
console.log(str.constructor)

// endsWith
console.log(str.endsWith("see"));

// fromCharCode
console.log(String.fromCharCode(65))

// includes
console.log(str.includes('see'))

// indexOf
const arr=[2,1,3,4,1,5];
console.log(arr.indexOf(3))

// lastIndexOf
console.log(arr.lastIndexOf(1));

// localeCompare
let str2="Vanshika";
console.log(str.localeCompare(str2))

// match
console.log(str.match('see'));

// repeat
console.log(str2.repeat(3))

// replace
console.log(str1.replace(',',':'))

// replaceAll
console.log(str1.replaceAll('e','E'));

// search
console.log(str1.search("e"));

// split
console.log(str1.split(' '));

// startsWith
console.log(str1.startsWith("hey"));

// substr
console.log(str.substr(2,8))

// slice
console.log(str1.slice(2,8))

// substring
console.log(str.substring(2,8));

// toLocaleLowerase
console.log(str.toLocaleLowerCase());

// toLowerase
console.log(str.toLowerCase());

// toUppercase
console.log(str.toUpperCase());

// trim
strTrim="                vgv vgv ggf  "
let sr=strTrim.trim()
console.log(sr.length)
console.log(strTrim.length)

// valueOf
console.log(str1.valueOf());

// arrays
const array=[1,3,5,7,9,56];
console.log(array.at(5));

console.log(array.concat(array));

console.log(array.copyWithin(0,3,3));

// entries
console.log(array.entries());

// every
// function age(array){
//     return age>2
// }
// console.log(array.every(age));

// fill
// console.log(array.fill('78'))

// filter
// function filteredAge(age){
//     return age>3
// }
// console.log(array.filter(filteredAge));

// find
// function findAge(age)
// {
//     return age > 4;
// }
// console.log(array.find(findAge));

// findIndex
// function findInd(age){
//     return age<4;
// }
// console.log(array.findIndex(findInd))

// findLast
// function findInd(age){
//     return age>4;
// }
// console.log(array.findLast(findInd));

// findLastIndex
function findInd(age){
    return age>4;
}
console.log(array.findLastIndex(findInd));

// include
console.log(array.includes(4))

// indexOf
console.log(array.indexOf(5));

console.log(Array.isArray(array))

// console.log(array.join(' and '))

// keys
// let text='';
// for(x of array.keys()){
//     text+=x;
// }
// console.log(text);

// map
// function mapAge(age)
// {
//     return age> 2;
// }
// console.log(array.map(mapAge))

// console.log(Array.of(array));

// pop
// array.pop();
// console.log(array);

// push
// console.log(array.push(67))

// reduce
// function findSum(sum,array)
// {
//     return sum-array;
// }
// console.log(array.reduce(findSum));

// console.log(array.reverse());

// console.log(array.shift());

// console.log(array.unshift(78))

// console.log(array.slice(3,5));

// function some(age){
//     return age>3;
// }
// console.log(array.some(some))

// console.log(array.sort());

// console.log(array.splice(0,2,89,90));

// console.log(Number.EPSILON);
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.8));

console.log(Math.trunc(20.8));
console.log(Math.sign(-7))
console.log(Math.sign(0))
console.log(Math.sign(9))

console.log(Math.cbrt(3))

console.log(Math.log2(2))
console.log(Math.log10(10))

console.log(isFinite(10/10))
console.log(isFinite(10/0))

console.log(isNaN(2))

const fruits=["Banana","orange","apple"];
const t=fruits.entries();
let txt='';
for(x of t)
{
    txt+=x;
}
console.log(txt)