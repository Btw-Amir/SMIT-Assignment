var mainQuestions = [
  {
    title: "What is HTML",
    options: [
      "Programming Language",
      "Scripting Language",
      "Markup Language",
      "None of the above",
    ],
    correctAnswer: "Markup Language",
  },
  {
    title: "What is CSS",
    options: [
      "Styling Language1",
      "Gora Language",
      "Kala Language",
      "None of the above",
    ],
    correctAnswer: "Styling Language",
  },
  {
    title: "What is JS",
    options: [
      "Programming Language2",
      "Scripting Language",
      "Markup Language",
      "None of the above",
    ],
    correctAnswer: "Programming Language",
  },
  {
    title: "What is React",
    options: [
      "Programming Language3",
      "Scripting Language",
      "Markup Language",
      "None of the above",
    ],
    correctAnswer: "Programming Language",
  },
];
function start(event) {
  var questions = document.getElementById("questions");
  questions.className = "";
  var heading = document.getElementById("heading");
  heading.className = "";
  var serialNum = document.getElementById("serial-num");
  serialNum.className = "";
  var start = event.target;
  start.className = "hide";
  serialNum.innerHTML = "QUESTION NO :" + num;
  questions.innerHTML = mainQuestions[0].title;
  mainOptions();
  var next = document.getElementById("next");
  next.className = "";
}
var noQ = 0;
var num = 1;
function next() {
  noQ++;
  num++;
  // var mainOptions = document.getElementById("main-option");
  //   var inputelement = document.createElement("input");
  //
  if (noQ < mainQuestions.length) {
    var serialNum = document.getElementById("serial-num");
    serialNum.innerHTML = "QUESTION NO :" + num;

    questions.innerHTML = mainQuestions[noQ].title;
    mainOptions();
  } else {
    questions.innerHTML = "";
    var next = document.getElementById("next");
    next.className = "hide";
    var result = document.getElementById("result");
    result.className = "";
    mainOptions();
  }
}
function mainOptions() {
 
}
// timer = 30
// setInterval(function(){
//   timer--
//   console.log(timer)

// },1000)

// -------------bbbbbhhhsdhhhDWE IHOC
function getData() {
  fetch(url)
    .then((res) => res.json)
    .then((res) => {
      questions = res.results;
      var loading = document.getElementById("");
      loading.className = "hide";
    });
}
