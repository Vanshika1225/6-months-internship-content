// const curryingFunction=(a)=>{
//     console.log(a);
//     return (b)=>{
//         console.log(b);
//         return (c)=>{
//             console.log(c);
//             return a+b+c;
//         }
//     }
// }

// console.log(curryingFunction(3)(4)(5))

// const freindRequest=(greet)=>{
//     return (name)=>{
//         return (message)=>{
//             return `${greet} ${name} ${message}`
//         }
//     }
// }

// console.log(freindRequest("Good Afternoon")('Vanshika')(", How are you"))


const curry=(fn)=>{
    console.log("fn :",fn.length);
    return curried=(...args)=>{
        console.log("...args:",...args);
        if(fn.length !== args.length){
            return curried.bind(null,...args);
        }
    return fn(...args)
    }
}

const totalNum=(a,b,c)=>{
    return a+b+c;
}

const curriedTotal=curry(totalNum);
console.log(curriedTotal(10)(20)(30));