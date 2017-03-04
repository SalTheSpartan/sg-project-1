
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

var phrases = ['Liverpool', 'Barcelona' , 'AC Milan'];
$(document).ready(function(){
  var $phrase = $('<p></p>');
  var number = 0 + Math.floor(Math.random() * 3);
  $phrase.append(phrases[number]);
  $('.phrase').append($phrase);

});

$(document).ready(function(){
  for (var i = 0; i < alphabet.length; i++) {
    var $letterButton = $('<button></button>');
    $letterButton.append(alphabet[i]);
    $('.btn-group').append($letterButton);
  }
});




console.log('hello');
console.log($);
