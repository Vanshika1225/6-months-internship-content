// function statement / // function declaraion
a();
function a(){
    console.log("a called");
}
// a();

// b();
// function expression
// named function expresssion
var b=function notann(){
    console.log("b called");
}
b();
// notann() will give error

// anonmous fnction 
var c=function () {
    console.log("c called");
}
c();

// First class functions
const FirstClass=function (params1){
    return function xyz(){}
}
console.log(FirstClass());

