var question = ["How many Police Academy movies were there in the 1980s?", "Which 80s movie was the highest grossing film of the decade?", "Which 80s movie was Alan Rickman’s first feature film role?", "Hello, my name is Inigo Montoya. You killed my father. Prepare to die!"];
var answers = { a1: ["4", "9", "2", "5", "6"], a2: ["Princess Bride", "E.T.", "6", "The Breakfast Club", "Raiderds of the Lost Ark"], a3: ["Ferris Bueller's Day Off", "Ghost Busters", "Die Hard ", "Gremlins", "Sixteen Candles"], a4: ["E.T.", "Blazzing Saddles", "The Princess Bride", "Caddy Shack", "Terminator"]};
var intervalId;
var score = 0
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
      mkPg2();
      score++;
    }
    else if (trivVal=== "no"){
          alert("Wrong the correct answer is " + answers.a1[4])
          stop();
          mkPg2()
        };
        console.log(this.correct);
        
        
        
        return(0);
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
      stop();
      mkPg3();
      score++;
    }
    else if (trivVal=== "no"){
          alert("Wrong the correct answer is " + answers.a2[1])
          stop();
      mkPg3()
    };
    console.log(this.correct);
  
    
    return(0);
  });
};



//======================================



function mkPg3() {
  $("#answers").empty();
  $("#question").empty();
 
   reset();
   start();
   var splice=answers.a3.splice(2,1);
   for (var i = 0; i < answers.a3.length; i++) {
     var ans = $("<div>" + "<button correct='no' class = 'check'></button>" + answers.a3[i] + "</div>");
     console.log(splice);
     // var list = $("<ul>");
     ans.addClass("ans");
     
     var right = $("<div>" + "<button correct = 'yes' class = 'correct'></button>" +  splice+ "</div>");
     right.addClass("right");
     $("#answers").append(ans);
     // console.log(list);
   }
 
   $("#answers").append(right);
   var quest = $("<div>" + question[2] + "</div>");
   quest.addClass("quest");
   $("#question").append(quest);
   
   $("#answers").on("click", "button", function a3(event) {
     event.preventDefault();
     console.log(this)
     var trivVal = $(this).attr("correct");
     if (trivVal=== "yes"){
       alert("You Are Correct!!")
       stop();
      mkPg4();
      score ++;
     }
     else if (trivVal=== "no"){
           alert("Wrong the correct answer is " + answers.a3[2])
           stop();
      mkPg4()
     };
     console.log(this.correct);
   
     return(0);
   });
   
 };




 //=================================================



 function mkPg4() {
  $("#answers").empty();
  $("#question").empty();
 
   reset();
   start();
   var splice=answers.a4.splice(2,1);
   for (var i = 0; i < answers.a4.length; i++) {
     var ans = $("<div>" + "<button correct='no' class = 'check'></button>" + answers.a4[i] + "</div>");
     console.log(splice);
     // var list = $("<ul>");
     ans.addClass("ans");
     
     var right = $("<div>" + "<button correct = 'yes' class = 'correct'></button>" +  splice+ "</div>");
     right.addClass("right");
     $("#answers").append(ans);
     // console.log(list);
   }
 
   $("#answers").append(right);
   var quest = $("<div>" + question[3] + "</div>");
   quest.addClass("quest");
   $("#question").append(quest);
   
   $("#answers").on("click", "button", function a4(event) {
     event.preventDefault();
     console.log(this)
     var trivVal = $(this).attr("correct");
     if (trivVal=== "yes"){
       alert("You Are Correct!!")
       stop();
       score++;
    
     }
     else if (trivVal=== "no"){
           alert("Wrong the correct answer is " + answers.a4[2])
           stop();
      
     };
     console.log(this.correct);
   
     stop()
     reset()
     alert("You got " + score + " out of 4!!")
     
   });
   
 };
function timeConverter(t) {

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


