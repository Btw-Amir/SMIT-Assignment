//                   ASSIGNMENT NO 04
// Q1
var num = prompt("Enter the Number")
var divide = num%3
if (divide === 0){
    alert("It is divisible by 3")
} else if(divide !== 0){
    alert("It is not divisible by 3")
}
// Q2
var num = prompt("Enter the Number")
if (num % 2 == 0){
    alert("The number is even")
}else {
    alert("The numbe is odd")
}
// Q3
var age = prompt("Enter the age")
if (age > 18){
    alert("Old enough")
}else{
    alert("Too young")
}
// Q4
var name = "amir"
var userInput = prompt("Enter your name")
if (userInput === name){
    alert("welcome")
}
// Q5
var num = prompt("Enter the number")
var divide = num%3
if (divide === 0){
    alert("it is divisible by 3")
} else if (divide !== 0){
    alert("it is not divisible by 3")
}
// Q6
var userInput = prompt("Enter some thing")
var code = userInput.charCodeAt()
if (code >= 65 && code <= 90 ){
    alert("uppercase letter")
}else if (code >= 97 && code <= 122){
    alert("lowercase letter")
}
// Q7
var num1 = prompt("Enter the first number")
var num2 = prompt("Enter the second number")
var userInput = prompt("Enter the operation")
switch(userInput){
    case "+": num1 + num2
    break;
    case "-": num1 - num2 
    break; 
    case "*": num1 * num2 
    break; 
    case "/": num1 / num2 
    break; 
    case "%": num1 % num2 
    break; 
    default: "invalid operator"
}
// Q8
var time = prompt("Enter the time")
if(time >= 0 && time < 1200){
    console.log("Good morning")
} else if(time >= 1200 && time < 1700){
    console.log("Good afternoon")
} else if(time >= 1700 && time < 2100){
    console.log("Good evening")
} else if(time >= 2100 && time < 2359){
    console.log("Good night")
} 
// Q9
var time = prompt("Enter the year")
var calc = time % 4
if (calc === 0 ){
    console.log("it is a leap year")
}else{
    console.log("it is not a leap year")

}
// Q10
var password = "something"
userInput = prompt("Enter your password")
if( userInput === ''){
    console.log("ac")
}else{
    if(userInput===password){
        console.log("Correct")
    }else if(userInput!==password){
        console.log("Incorrect password")
    }
}



// Q11
var firstName = "Ali";
if (firstName === "Fahad") {
document.write("Hello Fahad!");
}else {
    console.log("your are not Fahad")
}
// Q12
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}
// Q13
var num1 = prompt("Enter the first number")
var num2 = prompt("Enter the second number")
if(num1>num2){
    console.log("larger number is: "+ num1)
} else if(num1<num2){
    console.log("larger number is: "+ num2)
}else if(num1 === num2){
    console.log("both are larger number ")
}
// Q14
var num1 = prompt("Enter the first number")
if (num1 > 0){
    console.log("It is a Positive Integer")
}else if (num1 < 0){
    console.log("It is a Negative Integer")
}else if (num1 == 0){
    console.log("It is a zero")
}
// Q15
var userInput = prompt("enter the time")
if ( userInput >= 6 && userInput <=9){
    console.log("breakfast is served")
}else if( userInput >= 11 && userInput <=13){
    console.log("time for lunch")
}else if( userInput >= 17 && userInput <=20){
    console.log("its dinner time")
}else{
    console.log("sorry, you will have to wait")
} 
// Q16
var bool = true
typeof (bool)
var string = "dsad"
typeof (string)
var num = 2
typeof (num)
// Q17
var userInput = prompt("enter the character")
switch(userInput){
    case "a": console.log(true)
    break;
    case "e": console.log(true)
    break;
    case "i": console.log(true)
    break;
    case "o": console.log(true)
    break;
    case "u": console.log(true)
    break;
    default: 
 console.log(false)
}
// Q18
10!==8
// Q19
var month = 8
switch(month){
    case 1: console.log("January")
    break;
    case 2: console.log("february")
    break;
    case 3: console.log("march")
    break;
    case 4: console.log("aprail")
    break;
    case 5: console.log("may")
    break;
    case 6: console.log("june")
    break;
    case 7: console.log("july")
    break;
    case 8: console.log("August")
    break;
    case 9: console.log("September")
    break;
    case 10: console.log("Octuber")
    break;
    case 11: console.log("November")
    break;
    case 12: console.log("December")
    default: console.log("invalid month")
}
// Q20
var userInput = prompt("enter your age")
var age = userInput <=18 ? "too younger" : "Old enough"
console.log(age)