'use strict';

var pigLatin = function(english){
  // implement your solution here!
  var i, consonants, piglatinWords = [];

  english.split(" ").forEach(function(word) {
    if (isVowel(word.charAt(0))) {
      piglatinWords.push(word + "ay");
    }
    else {
      i = 0;
      while (!isVowel(word.charAt(i))) {
        i++;
      }
      consonants = word.slice(0, i);
      if (consonants.charAt(i-1) === 'q' && word.charAt(i) === 'u') {
        consonants += 'u';
        i++;
      }
      piglatinWords.push(word.substr(i, word.length) + consonants + "ay");
    }
  });
  return piglatinWords.join(" ");
};

var isVowel = function(letter){
  var pattern = /[aeiou]/;
  return pattern.test(letter);
};
