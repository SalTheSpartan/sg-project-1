$(document).ready(function(){
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var phrases = ['Liverpool', 'Barcelona' , 'Inter Milan'];
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
  console.log(phraseArray[6]);

  function buttonGenerator(){
    for (var i = 0; i < alphabet.length; i++) {
      var letterButton = $('<button></button>');
      letterButton.append(alphabet[i]);
      letterButton.prop('value', alphabet[i]);
      $('.btn-group').append(letterButton);
    }


  }


  buttonGenerator();

  function guessPhrase(phraseArray, numberOfGuesses){

    $('button').click(function() {
      // $('.usedLetters').append($(this).val());
      numberOfGuesses -= 1;
      console.log(numberOfGuesses);
      for (var i = 0; i < phraseArray.length; i++){
        if ($(this).val() === phraseArray[i]){
          console.log(phraseArray[i]);
          blankField[i] = phraseArray[i];
          $('.phrase').html('<span>' + blankField + '</span>');

        }
      }
    });

  }

  guessPhrase(phraseArray, 10);

});
