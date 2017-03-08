$(document).ready(function(){
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var categories = ['FOOTBALL TEAMS', 'MOVIES', 'PEOPLE'];
  var footballPhrases = ['LIVERPOOL', 'BARCELONA' , 'INTER MILAN'];
  var moviePhrases = ['LOGAN', 'SEABISCUIT', 'THE PURSUIT OF HAPPYNESS'];
  var peoplePhrases = ['JAMES COLAIRO', 'SALMAN KHAN', 'OSVALDO CALIARI'];
  var phrases = [];
  var blankField = [];
  var solveButton = false;

  function updateBlankField(arrayOfStrings) {
    $('.phrase').html('<span>' + arrayOfStrings.join(' ') + '</span>');
  }

  function categoryGenerator(){
    var category = categories[Math.floor(Math.random() * categories.length)];
    $('#category').append(category);
    switch(category) {
      case 'FOOTBALL TEAMS':
        phrases = footballPhrases;
        console.log(category);
        break;
      case 'MOVIES':
        phrases = moviePhrases;
        console.log(category);
        break;
      case 'PEOPLE':
        phrases = peoplePhrases;
        console.log(category);

    }

  }

  categoryGenerator();

  function phraseGenerator(){
    var $phraseContent = $('<li></li>');
    var number = 0 + Math.floor(Math.random() * phrases.length);
    $phraseContent.append(phrases[number]);
    var phraseArray = phrases[number].split('');
    console.log(phraseArray);
    for (var i = 0; i < phraseArray.length; i++){

      if (phraseArray[i] !== ' '){
        blankField.push('_');
      }else{
        blankField.push('&nbsp;');
      }
      updateBlankField(blankField);
    }
    // $('.phrase').append($phraseContent);
    return phraseArray;
  }

  var phraseArray = phraseGenerator();


  function buttonGenerator(){
    for (var i = 0; i < alphabet.length; i++) {
      var letterButton = $('<button class="letterButton"></button>');
      letterButton.append(alphabet[i]);
      letterButton.prop('value', alphabet[i]);
      $('.btn-group').append(letterButton);
    }


  }

  buttonGenerator();

  function guessCounter(remainingGuesses){

    var guessWrapper = $('<h3>'+ 'Attempts Remaining ' + remainingGuesses + '<h3>');
    $('.guessCounter').html(guessWrapper);

  }

  function guessPhrase(phraseArray, numberOfGuesses){

    $('.letterButton').click(function() {
      $(this).attr('disabled', true);
      $(this).css('border', '1px solid red');
      var val1 = $(this).val();
      numberOfGuesses -= 1;
      guessCounter(numberOfGuesses);
      console.log(numberOfGuesses);
      var test = isPhraseSolved(phraseArray, blankField);
      if (numberOfGuesses >= 1 && solveButton === false && !(test)){
        guessAttempt(val1, phraseArray, blankField);
      }else {
        solve(val1, phraseArray, blankField);
        $('.guessCounter').html('No guesses Remaining, Please Solve Phrase');

      }

    });

  }

  guessPhrase(phraseArray, 10);

  function guessAttempt(val1, phraseArray, blankField){
    for (var i = 0; i < phraseArray.length; i++){
      if (val1 === phraseArray[i]){
        console.log(phraseArray[i]);
        blankField[i] = phraseArray[i];
        updateBlankField(blankField);
        console.log(blankField);
      }
    }
    isPhraseSolved(phraseArray, blankField);
  }

  function solve(val1, phraseArray, blankField){

    console.log('solve test');
    var inArray = $.inArray(val1, phraseArray);
    console.log(inArray);

    for (var i = 0; i < phraseArray.length; i++){
      if (val1 === phraseArray[i]){
          // console.log(phraseArray[i]);
        blankField[i] = phraseArray[i];
        updateBlankField(blankField);
      } else {
      // console.log('solve else test');
        $('.letterButton').attr('disabled', true);
        $('.guessCounter').html('You Lose, Loser!!!');
      }
    }
  }

});

function isPhraseSolved(phraseArray, blankField){


  if (JSON.stringify(phraseArray)===JSON.stringify(blankField)){
    $('.letterButton').attr('disabled', true);
    $('.guessCounter').html('Congratulations You Win!!!');
    return true;
  }
}
