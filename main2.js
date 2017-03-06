$(document).ready(function(){
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var phrases = ['Liverpool', 'Barcelona' , 'Inter Milan'];

  function phraseGenerator(){
    var $phraseContent = $('<li></li>');
    var number = 0 + Math.floor(Math.random() * 3);
    $phraseContent.append(phrases[number]);
    var phraseArray = phrases[number].split('');
    console.log(phraseArray);
    for (var i = 0; i < phraseArray.length; i++){
      $('.phrase').append('_ ');
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

  function buttonValue(){
    $('button').click(function() {
      $('.usedLetters').append($(this).val());
      for (var i = 0; i < phraseArray.length; i++){
        if ($(this).val() === phraseArray[i]){
          console.log(phraseArray[i]);
        }
      }
    });

  }

  buttonValue();

});
