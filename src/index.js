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
    let arrayOfWords = expr.split('**********');
    let dotter = /10/gi;
    let dash = /11/gi;
    let splitterForChar = /\d{1,10}/g;
    let arrayWordsSplitByChar = arrayOfWords.map(item => item.match(splitterForChar));
    let arrayOfMorseWords = arrayWordsSplitByChar.map(word => word.map(char => char.replace(dash,'-').replace(dotter,'.').replace(/0/gi,'')));
    let decodedWords = arrayOfMorseWords.map(word => word.map(char => MORSE_TABLE[char]).join('')).join(' ');
    return decodedWords;
}

module.exports = {
    decode
}