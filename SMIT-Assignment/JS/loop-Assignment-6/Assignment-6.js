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
for(i=5; i <= 100; i+=5){
    document.write(i + " ")
}
// Q13
var students = ["Ali","Sami","Taha","Inam"]
var scores = [58,73,89,90]


document.write(students[0] +" "+ scores[0] + "<br>")
document.write(students[1] +" "+ scores[1] + "<br>")
document.write(students[2] +" "+ scores[2] + "<br>")
document.write(students[3] +" "+ scores[3])
// Q14
var scores = [12, 45, 3, 22, 34, 50]
var stop = +prompt("Enter stop value")

for (i = 0; i < scores.length; i++){


}
for(i = 0; i <= scores.indexOf(stop); i++){
        document.write (scores[i] + " ")
}
// Q15
var arr = [[1,2,3],[4,5,6],[7,8,9]]


for (var i = 0; i < arr.length; i++){
    nestedArray= arr[i]

    var line = ''
        for(var j =0; j< nestedArray.length; j++){

            line += nestedArray[j]



    }
    console.log(line)
}
// Q16
var userInput = prompt("Enter Number")
for(i = userInput; i > 0; i-=0.5)
document.write(i + ", ")
// Q17
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + " is even" + "<br>")
    }
    else if (i % 1 == 0) {
        document.write(i + " is odd" + "<br>")
    }

}
// Q18
var odd = 1

for (i = 1; i <= 7; i+=2){
     odd = odd * i
}
document.write("The Product of odd integars from 1 to 7 is " + odd)
// Q19
var userInput = prompt("Enter Initial Numbers Of Stars?.....")

for(var i =userInput.length; i > 0; i--){

    console.log(userInput.slice(0,i))
}

// Q20
// a
var stars = "*****"

for (var i = 0; i < 5; i++) {
       console.log(stars , "<br>")
}
// b

var star = "*****"

for (var i = 1; i <= star.length; i++){
    console.log(star.slice(0,i))
}

// c

var star = "*****"
for (var i = star.length; i > 0; i--){
    console.log(star.slice(0,i))
}