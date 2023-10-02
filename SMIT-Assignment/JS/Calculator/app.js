


var concatination= ''
var exp;
function getNum(num1){
    exp =  concatination+=num1
    var outputScreen = document.getElementById('b')
        outputScreen.innerHTML = exp;

}
function calculation(){
    concatination=''
    var outputScreen = document.getElementById('b')
    var result=(eval(exp))
    outputScreen.innerHTML=result
}
function clearText(){
    var outputScreen = document.getElementById('b')
outputScreen.innerHTML = '';
concatination=''
}

// task
var users = [ { id: 1, name: 'Alice', roleId: 1 }, { id: 2, name: 'Bob', roleId: 2 }, { id: 3, name: 'Charlie', roleId: 1 } ];
var roles = [ { id: 1, name: 'Admin' }, { id: 2, name: 'User' } ]
for (var i =0; i<users.length;i++){
    for(var j=0; j<roles.length;j++){
        if(users[i].roleId === roles[i].id){
            users[i].roleName = roles[i].name
        }
    }
}