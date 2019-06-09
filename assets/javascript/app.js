var question = ["How many Police Academy movies were there in the 1980s?", "question2", "question3", "question4", "question5"];
var answers = { a1: ["4", "9", "2", "5", "6"], a2: ["f1", "a2", "f3", "f4", "f2"], a3: ["f1", "f2", "a3", "f4", "f3"], a4: ["f1", "f2", "a4", "f4", "f3"], a5: ["a5", "f2", "f3", "f4", "f1"] };
var correct = false;

function mkPg1() {
    for (var i = 0; i < answers.a1.length - 1; i++) {
        var ans = $("<div>" + "<button id = 'check'></button>" + answers.a1[i] + "</div>");
        // var list = $("<ul>");
        console.log(ans);
        ans.addClass("ans");
        $("#answers").append(ans);
        // console.log(list);
    }
    var right = $("<div>" + "<button id = 'correct'></button>" + answers.a1[4] + "</div>");
    right.addClass("right");
    $("#answers").append(right);
    var quest = $("<div>" + question[0] + "</div>");
    quest.addClass("quest");
    $("#question").append(quest);
};
        $("#answers").on("click", "#correct", function a1(event) {
            event.preventDefault();
    
            if (correct = document.getElementById(correct)) {
                alert("You Are Correct!!")
            } else {
                alert("Wrong Try Again/n" + right)
            }
    
    
        });
mkPg1();
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


