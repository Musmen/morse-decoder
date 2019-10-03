const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  
  var WORD_STEP = 10;
  var MORSE_STEP = 2;
  var BIT_TO_MORSE = {
    '10':  '.',
    '11':  '-',
    '**':  ' ',
    '00':   ''
  };

  var parseString = function(inputStr, step) {
    var result = [];
    var index = 0
    while (index < inputStr.length) {
      result.push(inputStr.slice(index, index += step));
    }
    return result;
  }
  
  var morseCode = parseString(expr, WORD_STEP). // Parse inputStr to bitWordsArray
    map(
      function(item) {
        return parseString(item, MORSE_STEP). // Parse each bitWord to morseWord
          map(
            function(item) {
              return BIT_TO_MORSE[item];
            }
          ).join('');
      }
    );

  return morseCode. // Decode each morseWord
    map( 
      function(item) {
        if (item === '     ') return ' '; 
        return MORSE_TABLE[item];
      }
    ).join('');
}

module.exports = {
    decode
}