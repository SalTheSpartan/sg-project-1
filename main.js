
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

var phrases = ['Liverpool', 'Barcelona' , 'AC Milan'];

$(document).ready(function(){
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

  // $(document).ready(function(){
  function createButtons(){
    for (var i = 0; i < alphabet.length; i++) {
      var letterButton = $('<button></button>');
      letterButton.append(alphabet[i]);
      letterButton.prop('value', alphabet[i]);
      $('.btn-group').append(letterButton);
    }
    $('button').click(function() {
      $('.usedLetters').append($(this).val());

    });
  }
createButtons();
  // });
});


// $(document).ready(function(){
//   for (var i = 0; i < alphabet.length; i++) {
//     var letterButton = $('<button></button>');
//     letterButton.append(alphabet[i]);
//     letterButton.prop('value', alphabet[i]);
//     $('.btn-group').append(letterButton);
//   }
//   $('button').click(function() {
//     $('.usedLetters').append($(this).val());
//
//   });
// });

console.log('hello');
console.log($);
