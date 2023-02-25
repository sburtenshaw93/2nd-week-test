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
console.log('______________')

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

const calcFinalPrice = (cartTotal, couponValue, tax) =>{
    const totalTax = cartTotal * tax;
    cartTotal += totalTax;
    cartTotal -= couponValue;
    return cartTotal

};
const cartTotal1 = calcFinalPrice(100, 4, 0.07)
console.log("$", cartTotal1)

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
Why I choose the following names for this object
1. customer name is a string since its just letters.
2. address is a string since its a mixed of letters and numbers
3. phoneNumber is a string since it has special charactors and numbers
4. credit card info. number, expirationMonth, 
expirationYear and csvCode are numbers since there are no letters or special charactors
5. cardType is a sring since it contains letters.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customerHistory = {
    customerName: "Wonda Spagetti",
    address: "1066 Happyville Lane, Roy, UT 84067",
    phoneNumber: "801-726-9201",
    creditCardInfo: {
        number: 4829283791928383,
        expirationMonth: 10,
        expirationYear: 25,
        csvCode: 123,
        cardType: "Visa"
    }

}
console.log(customerHistory)
