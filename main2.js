$(document).ready(function(){
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var phrases = ['LIVERPOOL', 'BARCELONA' , 'INTER MILAN'];
  var blankField = [];

  function phraseGenerator(){
    var $phraseContent = $('<li></li>');
    var number = 0 + Math.floor(Math.random() * 3);
    $phraseContent.append(phrases[number]);
    var phraseArray = phrases[number].split('');
    console.log(phraseArray);
    for (var i = 0; i < phraseArray.length; i++){

      blankField.push('_');
      $('.phrase').html('<span>' + blankField + '</span>');

    }
    $('.phrase').append($phraseContent);
    return phraseArray;
  }

  var phraseArray = phraseGenerator();


  function buttonGenerator(){
    for (var i = 0; i < alphabet.length; i++) {
      var letterButton = $('<button></button>');
      letterButton.append(alphabet[i]);
      letterButton.prop('value', alphabet[i]);
      $('.btn-group').append(letterButton);
    }


  }


  buttonGenerator();

  function remainigGuesses(){
    // $('.usedLetters').append($(this).val());
  }

  function guessPhrase(phraseArray, numberOfGuesses){

    $('button').click(function() {
      $(this).attr('disabled', true);
      $(this).css('border', '1px solid red');
      numberOfGuesses -= 1;
      console.log(numberOfGuesses);
      if (numberOfGuesses > 0){
      for (var i = 0; i < phraseArray.length; i++){
        if ($(this).val() === phraseArray[i]){
          console.log(phraseArray[i]);
          blankField[i] = phraseArray[i];
          $('.phrase').html('<span>' + blankField + '</span>');

        }
      } // end of for loop
    }else{
      console.log('game over');
    }
    });

  }

  guessPhrase(phraseArray, 10);

});
