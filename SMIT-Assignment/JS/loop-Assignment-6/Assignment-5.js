//          ASSIGNMENT NO : 05
// Q1
var e = []
// Q2
var eObj ={
    e:"",
}
// Q3
var e = ["abc"]

// Q4
var e = [0]

// Q5
var e = [true]

// Q6
var e = [true, 0,"abc"]

// Q7
var educationQualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"]
console.log(educationQualifications)
// Q8
var studentName = ["Saad" , "Hammad" , "Talha"]
var score = [380 , 470 , 230]
 console.log("Score of " + studentName[0] + " is " + score[0] + ". Percentage: " + score[0]/500 *100 + "% ")
 console.log("Score of " + studentName[1] + " is " + score[1] + ". Percentage: " + score[1]/500 *100 + "% ")
 console.log("Score of " + studentName[2] + " is " + score[2] + ". Percentage: " + score[2]/500 *100 + "% ")
// Q9

var colors = ["Red" , "Blue" , "Yellow" , "Black"]
 console.log(colors + "")

colors.unshift(prompt("Add color what color you want to beginning of an array"))
 console.log(colors + "")

colors.push(prompt("Add color what color you want to end of an array"))
 console.log(colors + "")

colors.unshift("Green" , "White")
 console.log(colors + "")

colors.shift()
 console.log(colors + "")

colors.pop()
 console.log(colors + "")

colors.splice(prompt("Which index you want to add color..") , 0 , prompt("color name"))
 console.log(colors + "")

var userDefined = colors.splice(prompt("Which index you want to delete colors") , prompt("How many colors you want to delete"))
 console.log(colors)

colors.splice(userDefined , userDefined)
 console.log(colors)
// Q10

var studentScore = [320, 480, 230, 120]

 console.log('Score of Students ' + studentScore + "")
 console.log('Order Score of Students ' , studentScore[3], ' ', studentScore[2], ' ', studentScore[0], ' ', studentScore[1])
// Q11
var cities = ["Karachi","Lahore","Peshawar","Quetta","Islamabad"]
 console.log("<h1>Cities list:</h1> ")
 console.log(cities)
 console.log("<h1>Selected cities list:</h1> ")
 console.log(cities[4],cities[3])

// Q12
var arr = ["This","is","my","cat"]
 console.log("<h1>Array:</h1>" + arr)
 console.log("<h1>String:</h1>" + arr[0] + " " + arr[1] + " " + arr[2] + " " +arr[3])

// Q13

var devices = ['keyboard','mouse','printer','monitor']
var out = "Out: "

 console.log("Devices: " , devices )
 console.log("")
 console.log(out,devices[0])
 console.log("")
 console.log(out,devices[1])
 console.log("")
 console.log(out,devices[2])
 console.log("")
 console.log(out,devices[3])
// Q14
var devices = ['keyboard','mouse','printer','monitor']
var out = "Out: "

 console.log("Devices: " , devices )
 console.log("")
 console.log(out,devices[3])
 console.log("")
 console.log(out,devices[2])
 console.log("")
 console.log(out,devices[1])
 console.log("")
 console.log(out,devices[0])
// Q15
