// Objects

// 1

var studentData = {
    name: "Usama",
    age: 23,
    student_Id: 420 
}

alert(studentData.name + " " + studentData.age + " " + studentData.student_Id)

//2

var studentObject ={
    Student_Name :  'Rehan Uddin',
    Student_Age : 20
}
if(studentObject.Student_Age < 20){
    alert("This Student Is Not Eligible For Model A Class")
}

//3

var studentOne = {
    studentName: "Zia Khan",
    student_Id: "J30052425300",
    student_Html: 80,
    student_Css: 90,
    student_Javascript: 90,
    student_Bootstrap: 70,
    totalMarks: 400
}

var studentTwo = {
    studentName: "Zia Khan",
    student_Id: "J30052425300",
    student_Html: 60,
    student_Css: 70,
    student_Javascript: 65,
    student_Bootstrap: 85,
    totalMarks: 400

}

var studentOnePer = studentOne.student_Html + studentOne.student_Css + studentOne.student_Javascript + studentOne.student_Bootstrap * 100 / studentOne.totalMarks

console.log(studentOnePer + " %")

var studentTwoPer = studentTwo.student_Html + studentTwo.student_Css + studentTwo.student_Javascript + studentTwo.student_Bootstrap * 100 / studentTwo.totalMarks

console.log(studentTwoPer + " %")

if(studentOnePer > studentTwo){
    console.log(studentOne.studentName , " Is Eligible For Scholarship")
}
else{
    console.log(studentTwo.studentName , " Is Eligible For Scholarship")
}



// 4

var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]

arr.splice(3,1,{name: 'Siddiq', age: 23})
arr.push({name: 'Umair', age: '23'})
arr.shift()

// 5


// 5