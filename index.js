
let state = {currentQuestion: undefined,
  score: 0, questionAnswered: false
};


function handleStart(){
  console.log('handleStart, run');
  state.currentQuestion = 1;
  $(".title").addClass("js-display-hide");
  $(".start").addClass("js-display-hide");
  $(".questionInfo").removeClass("js-display-hide");
  $(".nav").removeClass("js-display-hide");
  questionCounter();
  renderQuiz();
}

function handleRestart(){
  $('.playAgain').on('click', '.restartButton', function(){
    $('.playAgain').addClass("js-display-hide");
    state.score=0;
    state.questionAnswered=false;
    $('.wrong').removeClass('js-display-hide');
    resetForms();
    handleStart();
  });
}

function resetForms(){
  document.getElementById('q1').reset();
  document.getElementById('q2').reset();
  document.getElementById('q3').reset();
  document.getElementById('q4').reset();
  document.getElementById('q5').reset();
  document.getElementById('q6').reset();
  document.getElementById('q7').reset();
  document.getElementById('q8').reset();
  document.getElementById('q9').reset();
  document.getElementById('q10').reset();
}
function renderQuiz(){
  $(".mainQuest").addClass("js-display-hide");
  $(`#${state.currentQuestion}`).removeClass("js-display-hide");
  $('.score p').text(`Score ${state.score}/10`);
  state.questionAnswered=false;
}

function goButtonStart(){
  $(".start").on('click', '.startButton', function(){
    console.log('click');
    handleStart();
  });
}


function nextQuestion(){
  console.log('nextQuestion,run');
  $('.nav').on('click', '.nextButton', function(){
    if (state.currentQuestion<10){
      if (state.questionAnswered===true){
        state.currentQuestion++;
        questionCounter();
        $('.feedback').empty();
        $('.wrong').removeClass('js-display-hide');
        renderQuiz();
        console.log('Next question');
      }
    }
    else{
      displayFinalPage();
    }
  });
}

function displayFinalPage(){
  $(".questionInfo").addClass("js-display-hide");
  $(".nav").addClass("js-display-hide");
  $('.mainQuest').addClass("js-display-hide");
  $('.playAgain').removeClass("js-display-hide");
  $('.finalScore').text(`${state.score}/10,`);
}

/*function prevQuestion(){
  console.log('prevQuestion,run');
  $('.nav').on('click', '.prevButton', function(e){
    if(state.currentQuestion===1){
      e.preventDefault();
    }
    else{
      state.currentQuestion--;
      questionCounter();
      renderQuiz();
      console.log('Previous Question');
    }
  });
}*/

function questionCounter(){
  console.log('questionCounter,run');
  $('.questionNum p').text(`Question ${state.currentQuestion}/10`);
}

function questionAnswer1(){
 $(".question1").on('click', "input[type='radio']", function(e){
   if(state.questionAnswered){
     e.preventDefault();
   }
   else{
     state.questionAnswered=true;
     let a = $("input[name='color1']:checked").val();
     console.log(a);
     if(a=='blue'){
       console.log('correct');
       $('.ans1').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans1').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
   }
 });
}
function questionAnswer2(){
 $(".question2").on('click', "input[type='radio']", function(e){
   if(state.questionAnswered){
     e.preventDefault();
   }
   else{
     state.questionAnswered=true;
     let a = $("input[name='color2']:checked").val();
     console.log(a);
     if(a=='purple'){
       console.log('correct');
       $('.ans2').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans2').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
   }
 }); 
}
function questionAnswer3(){
 $(".question3").on('click', "input[type='radio']", function(e){
   if(state.questionAnswered){
     e.preventDefault();
   }
   else{
     state.questionAnswered=true;
     let a = $("input[name='color3']:checked").val();
     console.log(a);
     if(a=='green'){
       console.log('correct');
       $('.ans3').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans3').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
   }
 }); 
}
function questionAnswer4(){
  $(".question4").on('click', "input[type='radio']", function(e){
    if(state.questionAnswered){
      e.preventDefault();
    }
    else{
     state.questionAnswered=true;
     let a = $("input[name='shape1']:checked").val();
     console.log(a);
     if(a=='circle'){
       console.log('correct');
       $('.ans4').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans4').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
    }
 });
 
  
}
function questionAnswer5(){
  $(".question5").on('click', "input[type='radio']", function(e){
    if(state.questionAnswered){
      e.preventDefault();
    }
    else{
     state.questionAnswered=true;
     let a = $("input[name='shape2']:checked").val();
     console.log(a);
     if(a=='square'){
       console.log('correct');
       $('.ans5').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans5').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
    }
 });
  
}
function questionAnswer6(){
  $(".question6").on('click', "input[type='radio']", function(e){
    if(state.questionAnswered){
      e.preventDefault();
    }
      else{
      state.questionAnswered=true;
     let a = $("input[name='shape3']:checked").val();
     console.log(a);
     if(a=='heart'){
       console.log('correct');
       $('.ans6').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans6').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
    }
 });
  
}
function questionAnswer7(){
  $(".question7").on('click', "input[type='radio']", function(e){
    if (state.questionAnswered){
      e.preventDefault();
    }
    else{
      state.questionAnswered=true;
     let a = $("input[name='number1']:checked").val();
     console.log(a);
     if(a==2){
       console.log('correct');
       $('.ans7').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans7').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
    }
 });
  
  
}
function questionAnswer8(){
  $(".question8").on('click', "input[type='radio']", function(e){
    if (state.questionAnswered){
      e.preventDefault();
    }
    else{
      state.questionAnswered=true;
     let a = $("input[name='number2']:checked").val();
     console.log(a);
     if(a=='1'){
       console.log('correct');
       $('.ans8').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans8').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
    }
 });
  
}
function questionAnswer9(){
  $(".question9").on('click', "input[type='radio']", function(e){
    if(state.questionAnswered){
      e.preventDefault();
    }
    else{
      state.questionAnswered=true;
     let a = $("input[name='letter1']:checked").val();
     console.log(a);
     if(a=='p'){
       console.log('correct');
       $('.ans9').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans9').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
    }
 });
  
}
function questionAnswer10(){
  $(".question10").on('click', "input[type='radio']", function(e){
    if (state.questionAnswered){
      e.preventDefault();
    }
    else{
      state.questionAnswered=true;
     let a = $("input[name='letter2']:checked").val();
     console.log(a);
     if(a=='k'){
       console.log('correct');
       $('.ans10').html('<h3>Correct!</h3><p>You got the right answer!</p>');
       state.score++;
     }
     else{
       console.log('incorrect');
       $('.ans10').html('<h3>Sorry...</h3><p>This is the correct answer</p>');
       $('.wrong').addClass('js-display-hide');
     }
    }
 });
  
}
function handleQuiz(){
  console.log('handleQuiz,run');
  $(nextQuestion);
  $(goButtonStart);
  /*$(prevQuestion);*/
  $(questionCounter);
  $(questionAnswer1);
  $(questionAnswer2);
  $(questionAnswer3);
  $(questionAnswer4);
  $(questionAnswer5);
  $(questionAnswer6);
  $(questionAnswer7);
  $(questionAnswer8);
  $(questionAnswer9);
  $(questionAnswer10);
  $(handleRestart);
  //this will act as callback function
}
$(handleQuiz);