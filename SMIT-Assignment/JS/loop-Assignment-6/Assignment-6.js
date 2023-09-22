//          Assignment no : 6

// Q1
var text = "hello world" 
for (var i = 0; i <  10; i++ ){
    alert(text)
}
// Q2
for (var i = 1; i<= 10 ; i++){
    console.log(i)
} 
// Q3
var userInput = prompt("Enter the table of any number")
var length = prompt("Enter the length of your table")
for (var i = 1; i<=length ;i++){
    alert(userInput + " x " + i + " = " + userInput*i)
}
// Q4
var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
for (var i = 0; i<A.length; i++){
console.log (A[i])
}
// Q5
var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
for (var i = 0; i<A.length; i++){
console.log ("Element at index "+ i +" is "+ A[i])
}
// Q6
// Q7
//              a
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (var i=0; i<=num.length; i++){
    console.log(num[i])    
}
//          b
for (var i=15; i>=0; i--){
    console.log(num[i])    
}
//          c
for (var i=0; i<=10; i+=2){
    console.log(i)    
}
//          d
for (var i=0; i<=10; i+=3){
    console.log(i)    
}
//          e
for (var i=0; i<=10; i+=2){
    console.log(i+"k")    
}
// Q8
var A = ["cake", "apple pie","cookie", "chips", "patties"]
var userInput = prompt("Enter the item you want ")
var flag= false
for (var i = 0;i <= A.length; i++){
if (userInput === A[i]){
    var flag = true
    alert(userInput + " is available at index "+ i + "in our bakrey")
}
}
if (flag === false){
    alert("We are sorry. " + userInput + " is available at in our bakrey")
}
// Q9
    var A = [24, 53, 78, 91, 12]
    var b = A[0]
    for (var i = 0; i<A.length; i++){
        if(b < A[i]){
            b = A[i]
            
        }
    }
    console.log("The largest number is "+b)
// Q10
var A = [24, 53, 78, 91, 12]
var b = A[0]
for (var i = 0; i<A.length; i++){
    if(b > A[i]){
         b = A[i]
        
    }
}
console.log("The smallest number is "+b)
// Q11
var A = [24, 53, 78, 91, 12]
var b = A[0]
for (var i = 0; i<A.length; i++){
    if(b < A[i]){
        b = A[i]
        
    }
}
console.log("The largest number is "+b)

for (var i = 0; i<A.length; i++){
    if(b > A[i]){
         b = A[i]
        
    }
}
console.log("The smallest number is "+b)

// Q12
// Q13
// Q14
// Q15
// Q16
// Q17
// Q18
// Q19
// Q20



function calc (num1,op,num2){
    switch(op){
        case "+":
        console.log(num1 + num2)
         break;
        case "-":
        console.log(num1 - num2)
         break;
        case "*":
        console.log(num1 * num2) 
        break;
        case "/":
        console.log(num1 / num2) 
        break;
    }
}

function dice (){
   Math.ceil( Math.random()*6)
}
 
function reverse (userInput){
    var blank = ' '
    for (var i = userInput.length;i>=0;i--){
    blank += userInput[i]
    }
console.log(blank)
return blank

}

function reverse (userInput){
    var blank = ''
        for (var i = userInput.length;i>=0;i--){
    blank += userInput[i]
        }
console.log(blank)
if(blank === userInput){
    console.log("done")
} else{
console.log("no")
}
}

function countVowel (text){
    for (var i = 0; i<=text.length; i++){
        var total = 0
        if (text[i]= "a"){
            total++
            break
        } else  if (text[i]= "e"){
            total++
            break
        } else if (text[i]= "i"){
            total++
            break
        } else if (text[i]= "o"){
            total++
            break
        } else if  (text[i]= "u"){
            total++
            break
        }
    }
    console.log(total)

}

