const cart = ['shoes', 'pants', 'kurta'];

// call back hell / Pyramid of dom
// createOrder(cart, function () {
//     proceedToPayment(orderId, function (paymentInfo) {
//         showOrderSummary(paymentInfo,function () {
//             updateVoletBalanace();
//         });
//     });
// });

// createOrder(cart)

// .then( (orderId) => proceedToPayment(orderId))

// .then((paymentInfo) => showOrderSummary(paymentInfo))

// .then((paymentInfo) => updateVoletBalanace(paymentInfo))

// const p=new Promise((resolve,reject)=>{
//     resolve("Promise resoolved")
// })

// async function data(){
//     return p;
// }

// const getData=data();
// console.log(getData);

// getData.then((res=>console.log(res)))

// const p=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise resoolved again")
//     }, 10000);
// });

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise resoolved again2")
//     }, 5000);
// });

// async function handlePromise(){
//     console.log("Hello Wolrd")

//     const val = await p;
//     console.log("Namaste js")
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste js2")
//     console.log(val2);
// }

// handlePromise();

// const api_url= "https://api.github.com/users/Vanshika1225"

// async function handle()
// {
//     try{

//         const data=await fetch(api_url);
//         const val = await data.json();
//         console.log(val)
//     }
//     catch(err){
//         console.log(error)
//     }
// }

// handle();

// const api_url= "https://api.github.com/users/Vanshika1225"

// async function handle()
// {
//     const data=await fetch(api_url);
//     const val = await data.json();
//     console.log(val)
// }

// handle().catch(err=>console.log(err));
createOrder(cart)
.then(function (orderId) {
    console.log(orderId)
    return orderId
})
.catch(function (error) {
    console.log(error.message);
})
.then(function (orderId){
    return proceedToPayment(orderId)
})
.then(function (paymentInfo){
    console.log(paymentInfo)
    return paymentInfo;
})


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const error = new Error("Invalid cart")
            reject(error);
        }

        const order_id = "12345";
        if (order_id) {
            resolve(order_id);
        }
    });
    return pr;
}
function proceedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve("Payment successfull");
    })
}
function validateCart(cart) {
    return false;
    // return true;
}