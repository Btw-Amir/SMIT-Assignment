// clean function
function cls (){
    var inputElement = document.getElementById('main-input')
    inputElement.value= ""

}
// for add the elements
function addItem(){
    var inputElement = document.getElementById('main-input')
    var listElement = document.getElementById('list')
    var liElement = document.createElement('li')
   liElement.innerHTML= "<span>"+inputElement.value +"</span>"+ "<button onclick ='editbtn(event)' class='btn style-btn'> Edit </button>"+ "<button onclick ='dltbtn(event)'class='btn delete-btn'> delete </button>"
    listElement.append(liElement)
    cls()
}
// for delete the list elements
function dltbtn(event) {
var liElement = event.target.parentElement
console.log(event)
liElement.remove()
}
// for edit btn
function editbtn(event){
    var inputElement = document.getElementById('main-input')
var liElement = event.target.previousSibling
inputElement.value = liElement.innerHTML

var updatebtn = document.getElementById('update-btn')
var addbtn = document.getElementById('add-btn')

updatebtn.className ='btn style-btn'
addbtn.className='hide'
}
var inputElement
// for update btn
function updateItem (){
    // input ma jo value aye us ko usi ki jaghe par rakh de
    var update = inputElement.value
console.log(update)
}
// for delete All button
function deleteItem(){
    var listElement = document.getElementById('list')
console.log(listElement.value) 

}

