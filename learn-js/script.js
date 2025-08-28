// Chapter 1:- Variables!!!!!!!!!!!!!!!!

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

// what did i learn? how to correctly map and define objects in code so that they dont overlap and break apart.

 /*
 this is a multi line
 comment 
 so fucking convenient ~^^
 */

 // and this is a single line one, really good for when i want to force myself to explain whats happening in as few words as possible. i learnt about how comments work ^^

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

 // numbers review - done was really easy tbh increment and decrement op

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
console.log(email[0]);
//- print the last character in this string
console.log(email[email.length -1]);
//- print the entire string here
console.log(email);

// i learnt how to index / categorize specific characters with their respectice numbers and display them

// template literals

const Name = `saul goodman`;
const OpenRate = 30.5;

let msg =`Hi ${Name}, your open rate is: ${OpenRate} `;

console.log(msg);

// learnt how to display numbers and other messages in a string such as username + some text / sentences, etc.

//semi colons in js

console.log(`contacting cell tower...`); console.log(`sending message...`);

// meh makes sense

//string encoding, whatever the hell that is.

let StringEncodeName = `🐻`;
console.log(`constant 'name' UTF-16 unit length: ${StringEncodeName.length}`);
console.log(`constant 'name' character length: ${[...StringEncodeName].length}`);
console.log(`===================`);
console.log(`Hi ${StringEncodeName}, welcome to Textio!`);

// so what did i learn? i learnt that different emojis and other things in the strings affect the amount of utf characters take 

// camel case in js, which is first word is small letter start then the second subsequent word is capital letter first.

//Chapter 2:- Comparisons!!!!!!!!!!!!!!!!

//Conditionals

let messageLen = 10;
const maxMessageLen = 20;
console.log(
   `Trying to send a message of length:`,
   messageLen,
   `and a max length of:`,
   maxMessageLen,
);


if (messageLen <= maxMessageLen) {
   console.log(`Message sent`);
} else {
   console.log(`Message not sent`);
}

// what did i learn? how to check and validate if the piece of code im wirting is working as intended or not

//comparison operators

console.log(5 < 6);
console.log(5 !== 6);
console.log(5 !== `5`);
console.log(6 >= 6);

// i learnt about comparison operators, simple

//logical operators && || !false/!true = true/false 

const hasHighOpenRate = true;
const isRecent = true;
const hasStrongReplyRate = false;
const canBeResent = true;
const isFlaggedAsSpam = false;

const isHighEngagement = hasHighOpenRate && isRecent && (hasStrongReplyRate || canBeResent) && !isFlaggedAsSpam;

console.log(`The campaign is high-engagement: ${isHighEngagement}`);

// what did i learn? how to use logical operators && || ! ,to check if my variables are being used correctly and as intended and not prompting me to get an inavalid result.

// Switch

function billingCost(plan) {
   switch(plan) {
      case "basic":
      return 10.0;
      case "pro":
      return 20.0;
      case "enterprise":
      return 50.0;
      case "free":
      return 0.0;
      default:
      return 0.0
   }
}

console.log(`basic plan: $${billingCost("basic")}`);
console.log(`pro plan: $${billingCost("pro")}`);
console.log(`enterprise plan: $${billingCost("enterprise")}`);
console.log(`free plan: $${billingCost("free")}`);
console.log(`unknown plan: $${billingCost("unknown")}`);

// what did i learn? how to use switch cases and its diverse functionality to sift through functions and return whats needed with not a lot of clutter / boilerplate via if elses

// ternary operator 

const retryLimit = 10;
const numRetries = 9;

let messageStatus = numRetries <= retryLimit ? "processing" : "failed";
console.log(messageStatus);

/*let messageStatus = numRetries <= retryLimit;
if (messageStatus) {
   console.log(`processing`);
} else {
   console.log(`failed`);
} */

// what did i learn? how to use ternary for really small  operations if needed at all, that is.

//when to ternary, when the task is simple

// truthy and falsy

const userCredits = -2;

if (userCredits >= 1) {
   console.log (`sending message...`);
} else {
   console.log(`not enough credits.`)
}

// its a simple true / false check to make sure that the credits are being calculated appropriately

// nullish coalescing

const nullName = `James holden`;
const provider = `AT&T`;
const phoneNumber = `555-123-4567`;
const subscriptionType = null; 

console.log(`creating ${subscriptionType ?? "Guest"} profile for ${nullName} with ${provider} at ${phoneNumber}`);

// what did i learn? how to put default text values for users with no plans selected or those who chose no subscription

// chapter 3:- F-F-F-FFFUNCTIONSSSSSSS BABYYYYYY~~~~ HELL YEAH

// Functions 

function concat(str1, str2) {
   return str1 + str2;
}


console.log(concat(`lane,`, ` happy birthday!`));
console.log(concat(`Naomi,`, ` can you call me?`));
console.log(concat(`Juliette,`, ` where did you go?`));

// learnt how to use functions and return aka display/call the output correctly

// functions hoisting

// unit tests very important even more important than functions.

function getMonthlyPrice(tier) {
     switch (tier) {
    case "basic":
      return 10000;
    case "premium":
      return 15000;
    case "enterprise":
      return 50000;
    default:
      return 0;
   }
   // my code here
}  

console.log(getMonthlyPrice("basic"));    

// NOTE:- SINCE I DO NOT KNOW YET HOW TO PROPERLY UNIT TEST MY CODE IN MY VS CODE BY USING DIFFERENT FILES, I WONT INCLUDE MORE UNIT TEST FILES TILL LATER

