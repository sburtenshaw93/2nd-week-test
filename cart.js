///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

const totalSum = cart.reduce((acc, cur) => acc + cur.price, 0)
console.log('$', totalSum)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// cartTotal = []
// couponValue = []
// tax = []

// const calcFinalPrice = (cartTotal, couponValue, tax) =>{
//   for (let i = 0; i < cartTotal.length; i++){
//     cartTotal.push(tax[i] + tax[i] * .06)
//   } if (couponValue.reduce(cartTotal[i] - cartTotal[i])) {
//     return (cartTotal - couponValue) 
//   }
//   return(cartTotal)
// }
// const finalTotal = calcFinalPrice()
// console.log(finalTotal)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
For this customer I am making an object list of items this business will need.
1. We will need to make a list of items using the object arrayment.
2. We will list customers name, address, phone number, credit card info
3. We will create a nested object for card information
4. number, expiration, cvsCode and cardType
5. console.log() the variable to get customers full info.
I choose this path for the basic information and made the list of steps how to 
make a basic data structure for each customer. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const bensPizzaria = {
    customerName: "Wonda Spagetti",
    address: "1066 Happyville Lane, Roy, UT 84067",
    phoneNumber: ("801-726-9201"),
    creditCardInfo: {
        number: "2829 2837 9192 8383",
        expiration: "10/25",
        cvsCode: "123",
        cardType: "Visa"
    }

}
console.log(bensPizzaria)
