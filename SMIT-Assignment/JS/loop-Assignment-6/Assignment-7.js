// 1
var firstName = prompt("Enter your first name?....")
var lastName = prompt("Enter your last name?....")

var fullName = firstName + " " + lastName

alert("Hiiii" + fullName)

// 2
var userInput = prompt("Enter your mobile phone")

var length = userInput.length

 console.log("My Favourite Mobile phone is: " + userInput + " " + "Length of string is: " + length)

// 3
var abc = "Pakistani"

var indexN = abc.indexOf("n")

 console.log("String: " + abc + " " + "Index of 'n' is: " + indexN)
// 4
var text = "Hello World"

 console.log("String: " + text + "  Last index of 'l' is: " + text.lastIndexOf("l"))
// 5
var text = 'Pakistani'

 console.log("String: " + text + "   Character at index '3' is: " + text[3])

// 6
var firstName = prompt("Enter your first name?....")
var lastName = prompt("Enter your last name?....")

var fullName = firstName + " " + lastName

alert("Hiiii" + fullName)

// 7
var city = "Hyderabad"

// Using slice method
for (var i = 0; i < city.length; i++) {
    var extract = city.slice(i , i + 5)
    if (extract === "Hyder"){
        city = city.slice(0 , i) + "Islam" + city.slice(i + 5)
    }
    alert(city)
}
// Using replace method
city.replace("Hyder" , "Islam")

alert(city)
// 8

var beforeMessage = "Ali and Sami are best friends. They play cricket and football together."
var message = "Ali and Sami are best friends. They play cricket and football together."

for (i = 0; i < message.length; i++) {
    var extract = message.slice(i, i + 3)
    if(extract === "and"){
        message = message.slice(0,i) + "&" + message.slice(i + 3)
    }
}
console.log("Message: " + beforeMessage + "  After Replacement: " + message)

// 9
var value = "472"

 console.log("Value: " + value + "  Type: String   Value: " + +value + "  Type: Number")
// 10
var url = "www.facebook.com"

for (i = 0; i < url.length; i++) {

    var extract = url.slice(i, i + 4)
    if (extract === "www."){
        url = url.slice(0, i) + '' + url.slice(i + 4)
    }
}
 console.log(url)

// 11
var userInput = prompt("Enter any text")
var upperCase = userInput.toUpperCase('')

console.log (upperCase)

// 12
var userInput = prompt("Enter any text")
var lowerCase = userInput.toLowerCase('')

console.log (lowerCase)

// 13
var userInput = prompt("Enter Any Lower Case Text")
var titleCase = userInput[0].toUpperCase() + userInput.slice(1)


 console.log(titleCase)

// 14
var num = 35.36
var str = num.toString()

str = str.replace("." , "")

console.log(str)

// 15
var a = '3'
var b = '3'
var x = a + b
 console.log("a is " + a + "  b is " + b + "  a + b = " + x)

// 16
var a = '3'
var b = '3'
var y = +a - +b
 console.log("a is " + a + "  b is " + b + "  a - b = " + y)
// 17
var userName = prompt("Enter Your Name?....")

for (var i = 0; i < userName.length; i++){
    if (userName[i].charCodeAt() == 33){
    alert("Enter a valid name")
}
   else if (userName[i].charCodeAt() == 44){
    alert("Enter a valid name")

    } 
    else if (userName[i].charCodeAt() == 46){
    alert("Enter a valid name")

    } 
    else if (userName[i].charCodeAt() == 64){
    alert("Enter a valid name")

    } 
}

console.log(userName)    

// Q20

var userInput = prompt("Enter cookie name?....")
var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
var cookieFound = false

for (i = 0; i < arr.length; i++){
     if(arr[i].toLowerCase() === userInput){
        cookieFound = true
         console.log(userInput + " is available at index " + i + " in our bakery")
     }
}
if(cookieFound == false){
     console.log("We are sorry. " + userInput + " is not available in our bakery")
}
// Q21


var ab = 'car'
var cd = 'cab'
if( ab > cd){
     console.log("car is greater than cab")
}
else{
     console.log("cab is greater than car")
}
// Q22

var password = prompt("Enter Password")
password = password.toLowerCase()
  
   if(password.length < 6){
        alert("Please insert alteast 6 chracter password")
        
    }
    else if(password[0] >= 0 || password[0] <= 9){
        alert("Password cannot begin with a number")
        
    }
else if(password.charCodeAt() <= 122 && password.charCodeAt() >= 97){
        alert("Login Successful")
        
    }
console.log(password.length)
// Q23
var userInput = "Pakistan"

 console.log("User Input: " + userInput + "  Last character of input is: " + userInput[7])
// Q23

var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
var count = 0;
for(var i =0; i < text.length; i++){
    var extract = text.slice(i , i + 3)
   if(extract === 'the'){
    ++count;
    continue
   }
}
console.log(text)
console.log("There are " + count + " occurrences of word the")

// Q24
var str = "Pakistan"

str = str.toLowerCase()

var vcount = 0
var ccount = 0
for (var i = 0; i < str.length; i++){

    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i'){
        vcount++
    }
    else if(str[i] >= 'a' && str[i] <= 'z'){
        ccount++;
    }
}

console.log("Number of vowels: " + vcount)
console.log("Number of consonants: " + ccount)