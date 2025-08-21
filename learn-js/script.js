// simple start console.log
console.log(`Starting Textio server.....`);
// data types

var smsSendingLimit = 15;
var hasPermission = true;
var username = `this is a string`;
var nothing;

console.log(`smsSendingLimit is a ` + typeof smsSendingLimit);
console.log(`hasPermission is a ` + typeof hasPermission);
console.log(`username is a ` + typeof username);
console.log(`nothing is a ` + typeof nothing);
//what did i learn? data types


// learing about let and const

let messageText = `Welcome to Textio!`;
const isBirthday = true;

if(isBirthday) {
     const messageText = `Happy birthday!`;

    console.log(`sending birthday message.....`);
    console.log(`messageText: ` , messageText);
}

console.log(`sending welcome message`);
console.log(`messageText: ` + messageText);

// what did i learn? how to correctly map 
// and define objects in code so that they dont overlap and break apart.

 /*
 this is a multi line
 comment 
 so fucking convenient ~^^
 */

 // and this is a single line one, really good for when i want to force myself to explain whats happening in as few words as possible.
 // i learnt about how comments work ^^

 //numbers in js

 const promoMessages = 12;
 const reminderMessages = 15;
 const welcomeMessages = 8;
 const supportMessages = 5;

    const totalMessagesSent = promoMessages + reminderMessages + welcomeMessages + supportMessages;
    const averageMessagesSent = totalMessagesSent / 4;

 console.log(`Total messages: `, totalMessagesSent);
 console.log(`Average messages: `, averageMessagesSent)

 /*
 what did i learn from the above numbers in js? 
 i learnt how to calculate total numbers by adding up all the variables inside one collective variable
 and i learnt how to calculate the average for it too~
 */

 // numbers review - done was really easy tbh
 // increment and decrement op

 let numFailedMessages = 1336;

 numFailedMessages++;

 console.log(numFailedMessages + ` failed messages`)

 // what did i learn? i learnt how to add and substract but in a more easy way, i suppose

// undefined vs undeclared

let sentMessages;
let deliveredMessages;
let failedMessages;

console.log(`Sent is: `, sentMessages);
console.log(`Delivered is: `, deliveredMessages);
console.log(`Failed is: `, failedMessages);

// learnt a little about undefined and undeclared

// null vs undefined

let sentMess = null;
let delMess = null;
let faiMess = null;

console.log(`Sent is null: `, sentMess === null);
console.log(`Delivered is null: `, delMess === null);
console.log(`failed is null: `, faiMess === null);

// i learnt what null is and why its kinda used

// dynamic and weak

let totalSentMessages = 100;
let totalRecivedMessages = 50;


const totalMessages = totalSentMessages + totalRecivedMessages;

console.log(`Total sent messages: ` + totalSentMessages);
console.log(`Total Recived messages: ` + totalRecivedMessages);
console.log(`Total messages: ` + totalMessages);

// learnt how to differenciate between the different number types and how they are affecting each

// same line declerations

const avgOpenRate = 0.23 , displayMessage = `is the average rate of your messages`;

console.log(`Average open rate: `, avgOpenRate);
console.log(`Display message: `, displayMessage);

// what did i learn? same line declerations

//js speed/quiz done

//strings / indexing

const email = `stoob@gmail.com`; 

//tasks to do here:- 
//- print the first character in this string

//- print the last character in this string

//- print the entire string here
