var question = ["question1", "question2", "question3", "question4", "question5"];
var score = 0;
var losses = 0;
var answers = { a1: ["f1", "f2", "f3", "f4", "a1"], a2: ["f1", "a2", "f3", "f4", "f2"], a3: ["f1", "f2", "a3", "f4", "f3"], a4: ["f1", "f2", "a4", "f4", "f3"], a5: ["a5", "f2", "f3", "f4", "f1"] };


function mkAnswers1() {
   
    for (var i = 0; i < answers.a1.length; i++) {
        var ans = $("<li>" + answers.a1[i] + "</li>");
        
        
        // var list = $("<ul>");
        ans.addClass("ans");
        $("#list").append(ans);
        // console.log(list);
        // console.log(ans);
        $("#list").on("click", "ans", function a1() {
        //     if (answers.a1[4]) {
        //         score++;
        //     }
        //     else{
        //         losses++;
        //     }

        });
    }
};
mkAnswers1();
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
//         var quest = question[i];

//         // $("#question").append(quest);
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


