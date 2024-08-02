// reverse a number
// function reverse(num)
// {
//     num=num+"";
//     return num.split("").reverse().join("")
// }

// console.log(reverse(1234));

// palindrome
// function palindrome(str){
//     const revStr=str.split("").reverse().join("");
//     if(str===revStr){
//         console.log("String "+str+" is palindrome");
//     }
//     else{
//         console.log("String "+str+" is not palindrome");
//     }
// }

// palindrome("ABC")

function printCurrdateTime()
{
    const date=new Date();
    const day=date.getDay();
    const dayStr=['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log("Today is "+ dayStr[day]);
    const hour=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    const AmPm=hour>=12?"PM":"AM";
    console.log(hour+AmPm+":"+minutes+":"+seconds);
}

printCurrdateTime();