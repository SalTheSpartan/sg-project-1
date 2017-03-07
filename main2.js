$(document).ready(function(){
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var categories = ['FOOTBALL TEAMS', 'MOVIES', 'PEOPLE'];
  var footballPhrases = ['LIVERPOOL', 'BARCELONA' , 'INTER MILAN'];
  var moviePhrases = ['LOGAN', 'SEABISCUIT', 'THE PURSUIT OF HAPPYNESS'];
  var peoplePhrases = ['JAMES COLAIRO', 'SALMAN KHAN', 'OSVALDO CALIERI'];
  var phrases = [];
  var blankField = [];

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

      blankField.push('_');
      $('.phrase').html('<span>' + blankField + '</span>');

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

    var guessWrapper = $('<h3>'+ remainingGuesses + '<h3>');
    $('.guessCounter').html(guessWrapper);

  }

  function guessPhrase(phraseArray, numberOfGuesses){

    $('.letterButton').click(function() {
      $(this).attr('disabled', true);
      $(this).css('border', '1px solid red');
      numberOfGuesses -= 1;
      guessCounter(numberOfGuesses);
      console.log(numberOfGuesses);
      if (numberOfGuesses >= 0){
        for (var i = 0; i < phraseArray.length; i++){
          if ($(this).val() === phraseArray[i]){
            console.log(phraseArray[i]);
            blankField[i] = phraseArray[i];
            $('.phrase').html('<span>' + blankField + '</span>');

          }
        } // end of for loop
      }else{
        console.log('game over');
        guessCounter('You Lose, Loser!');
      }
    });

  }

  guessPhrase(phraseArray, 10);

});
