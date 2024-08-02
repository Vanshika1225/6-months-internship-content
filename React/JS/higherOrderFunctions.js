// const radius=[3,1,2,4];

// const area=function(radius){
//     return Math.PI*radius*radius;
// }

// const circumference=function(radius){
//     return Math.PI*radius*2;
// }

// const diameter=function(radius){
//     return radius*2;
// }

// Array.prototype.calculate = function(logic){
//     const output = [];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));

// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));

// const arr = [5, 1, 3, 2, 1];

// const double = arr.map(double=(x) => x * 2);
// const triple = arr.map(triple=(x) => x * 3);
// const binary = arr.map(binary=(x) => x.toString(2));

// console.log(double);
// console.log(triple);
// console.log(binary);

// const arr = [5, 1, 3, 2, 1];

// const odd = arr.filter((x)=>x%2!=0);
// const even = arr.filter((x)=>x%2==0);
// const greater2 = arr.filter((x)=>x>2);

// console.log(odd);
// console.log(even);
// console.log(greater2);

// const arr = [5, 1, 3, 2, 6];
// // function findSum(arr)
// // {
// //     let sum=0;
// //     for(let i=0;i<arr.length;i++){
// //         sum+=arr[i];
// //     }
// //     return sum;
// // }
// // console.log(findSum(arr));

// is same as

// const sum=arr.reduce(function(acc , curr){
//     acc+=curr;
//     return acc;
// },0);
// console.log(sum);

// const arr = [5, 1, 3, 2, 6];
// function findMax(arr)
// {
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max)
//         {
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output=arr.reduce(function (max,curr){
//     if(curr>max){
//         max=curr;
//     }
//     return max;
// },0)

// console.log(output);

const users=[
    {firstName:"akshay",lastName:"saini",age:26},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"deepika",lastName:"padkone",age:26}
]

// const output = users.map(x=>x.firstName + " " + x.lastName);
// console.log(output)

// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{});

// console.log(output)

// const output = users.filter(x=>x.age < 30).map(x=>x.firstName);
// console.log(output);

const output = users.reduce(function (acc,curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[])

console.log(output)