// var a=10;
// function b()
// {
//     var x=10;
// }
// console.log(window.a);
// console.log(a);
// console.log(x);//undeined


// undeined vs not defined
// console.log(a)
// var a;

// console.log(x)
// console.log(a)

// if(a===undefined)
// {
//     console.log("a is undefined")
// }
// else{
//     console.log("a is not undefined")
// }

// var a;
// console.log(a);
// a=10;
// console.log(a);
// a="Hello World";
// console.log(a);

// should not do 
// a=undefined
// console.log(a);

// function a()
// {
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// a();
// console.log(b);

// function two()
// {
//     var a;
//     console.log(a);
// }
// function one(){
//     var a=2;
//     console.log(a);
//     two();
//   }
//   var a=1;
//   console.log(a);
//   one();
  
// Temporal Dead Zone
// console.log(a);
// console.log(b);

// console.log(a);
// let a=10;

// console.log(a);
// var b=20;
// var a=100

// let b=200
// {
//     let a=10;
//     let b = 20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// shadowing
// var a=20
// {
//     var a=10;
//     console.log(a);
// }

// console.log(a);

// var a=20
// {
//     let a=10;
//     console.log(a);
// }

// console.log(a);

// var a=20
// {
//     const a=10;
//     console.log(a);
// }

// console.log(a);

// let a=20
// {
//     let a=10;
//     console.log(a);
// }
// console.log(a);

// no possible
// let a=20
// {
//     var a=10;
//     console.log(a);
// }

// console.log(a);


// let a=20
// {
//     const a=10;
//     console.log(a);
// }

// console.log(a);

// const a=20
// {
//     const a=10;
//     console.log(a);
// }

// console.log(a);

// no posiible 
// const a=20
// {
//     var a=10;
//     console.log(a);
// }

// console.log(a);

// const a=20
// {
//     let a=10;
//     console.log(a);
// }

// console.log(a);

// function x() {
//     var a=16;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste Js");
// }

// x();

// function x()
// {
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//         }, (i*1000));
//     }
// }

// x();


// function x()
// {
//     for(var i=1;i<=5;i++)
//     {
//         function close(x){
//             setTimeout(() => {
//                 console.log(x);
//             }, (x*1000));
//         }
//         close(i);
//     }
// }

// x();


// function counter(){
//     var count=0;
//     return function inrementCounter() {
//         count++;
//         console.log(count)
//     }
// }
// var counter1=counter();
// counter1();
// var counter2=counter();
// counter2()

// function counter(){
//     var count=0;

//     this.inrementCounter = function () {
//         count++;
//         console.log(count)
//     }

//     this.decrementCounter = function () {
//         count--;
//         console.log(count)
//     }
// }

// var counter1=new counter();
// counter1.inrementCounter();
// counter1.inrementCounter();
// counter1.decrementCounter()


