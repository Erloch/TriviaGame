var question = ["How many Police Academy movies were there in the 1980s?", "question2", "question3", "question4", "question5"];
var answers = { a1: ["4", "9", "2", "5", "6"], a2: ["f1", "a2", "f3", "f4", "f2"], a3: ["f1", "f2", "a3", "f4", "f3"], a4: ["f1", "f2", "a4", "f4", "f3"], a5: ["a5", "f2", "f3", "f4", "f1"] };
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 25;

function reset() {
  time = 25;
  clockrunning=false
  $("time-left").text(":25");


}
function start() {


  if (!clockRunning) {

    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }

}
function stop() {
  clearInterval(intervalId);

  clockRunning = false;
}
function count() {

  time--;
  var currentTime = timeConverter(time);
  $("#time-left").text(currentTime);
  if (time === 0) {
    stop()
    alert("Your time is up try again")
  }
}
function mkPg1() {
  $("#answers").empty();
  $("#question").empty();
  start()

  for (var i = 0; i < answers.a1.length - 1; i++) {
    var ans = $("<div>" + "<button correct='no' class = 'check'></button>" + answers.a1[i] + "</div>");
    // var list = $("<ul>");
    console.log(ans);
    ans.addClass("ans");

    $("#answers").append(ans);
    // console.log(list);
  }
  
  var right = $("<div>" + "<button correct = 'yes' class = 'correct'></button>" + answers.a1[4] + "</div>");
  right.addClass("right");

  $("#answers").append(right);
  var quest = $("<div>" + question[0] + "</div>");
  quest.addClass("quest");
  $("#question").append(quest);
  $("#answers").on("click", "button", function a1(event) {
    event.preventDefault();
    console.log(this)
    var trivVal = $(this).attr("correct");
    if (trivVal=== "yes"){
      alert("You Are Correct!!")
      stop();
      mkPg2()
    }
    else if (trivVal=== "no"){
          alert("Wrong the correct answer is " + answers.a1[4])
          stop();
          mkPg2()
        };
        console.log(this.correct);
        
        
        
      });
    };
    mkPg1();
    
    
    //===========================================================
    
    
    
function mkPg2() {
 $("#answers").empty();
 $("#question").empty();

  reset();
  start();
  var splice=answers.a2.splice(1,1);
  for (var i = 0; i < answers.a2.length; i++) {
    var ans = $("<div>" + "<button correct='no' class = 'check'></button>" + answers.a2[i] + "</div>");
    console.log(splice);
    // var list = $("<ul>");
    ans.addClass("ans");
    
    var right = $("<div>" + "<button correct = 'yes' class = 'correct'></button>" +  splice+ "</div>");
    right.addClass("right");
    $("#answers").append(ans);
    // console.log(list);
  }

  $("#answers").append(right);
  var quest = $("<div>" + question[1] + "</div>");
  quest.addClass("quest");
  $("#question").append(quest);
  
  $("#answers").on("click", "button", function a2(event) {
    event.preventDefault();
    console.log(this)
    var trivVal = $(this).attr("correct");
    if (trivVal=== "yes"){
      alert("You Are Correct!!")
    }
    else if (trivVal=== "no"){
          alert("Wrong the correct answer is " + answers.a2[1])
    };
    console.log(this.correct);
  
    
  });
};

function timeConverter(t) {

  //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "0";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
// function mkAnswers2(){
//     $("#answers").empty();

//     for(var i=0;i<answers.a2.length;i++){
//         var ans = answers.a2[i];
//         // console.log(ans); 
//     }
//     var listAns = $("<ul>");

//     answers.a2.forEach(function (fkAn) {
//      listAns.append("<li>" + fkAn + "</li>");
//      console.log(fkAn);
//       });
//       $("#answers").text(listAns);
// };
// setInterval(mkAnswers2(), 5000);

// $("#list").on("click", function a2() {
//     if (answers.a2[1]) {
//         score++;
//     }
//     else{
//         losses++;
//     }
// });

// function mkAnswers3(){
//     $("#answers").empty();

//     for(var i=0;i<answers.a3.length;i++){
//         var ans = answers.a3[i];
//         // console.log(ans); 
//     }
//     var listAns = $("<ul>");

//     answers.a3.forEach(function (fkAn) {
//      listAns.append("<li>" + fkAn + "</li>");
//      console.log(fkAn);
//       });
//       $("#answers").text(listAns);
// };
// setInterval(mkAnswers3(), 10000);
// $("#list").on("click", function () {
//     if (answers.a3[3]) {
//         score++;
//     }
//     else{
//         losses++;
//     }
// });

// function mkAnswers4(){
//     $("#answers").empty();

//     for(var i=0;i<answers.a4.length;i++){
//         var ans = answers.a4[i];
//         // console.log(ans); 
//     }
//     var listAns = $("<ul>");

//     answers.a4.forEach(function (fkAn) {
//      listAns.append("<li>" + fkAn + "</li>");
//      console.log(fkAn);
//       });
//       $("#answers").text(listAns);
// };
// setInterval(mkAnswers4(), 20000);



//==============================//


//questions functions
// function quest() {
//     $("#question").empty();
//     for (var i = 0; i < question.length; i++) {
//         var quest = $(question[i];

//         $("#question").append(quest);
//     }
//     console.log(quest)
// };
// quest();
// function quest2() {
//     $("#question").empty();
//     for (var i = 0; i < question.length; i++) {
//         var quest = question[i];
//         $("#question").text(quest[1]);
//     }
// };
// setInterval(quest2(), 50000);
// function quest3() {
//     $("#question").empty();
//     for (var i = 0; i < question.length; i++) {
//         var quest = question[i];
//         $("#question").text(quest[2]);
//     }
// };
// setInterval(quest3(), 80000);
// function quest4() {
//     $("#question").empty();
//     for (var i = 0; i < question.length; i++) {
//         var quest = question[i];
//         $("#question").text(quest[3]);
//     }
// };
// quest4();
// function quest5() {
//     $("#question").empty();
//     for (var i = 0; i < question.length; i++) {
//         var quest = question[i];
//         $("#question").text(quest[4]);
//     }
// };
// setInterval(quest5(), 100000);


