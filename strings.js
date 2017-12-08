function reversal(str) {
  let newStr = str.split('').reverse().join('');
}

function alphabits(str) {
  let newStr = str.toLowerCase().split('').sort().join('')
}

function palindrome() {
}

var testString = "Hey there!";
reversal(testString);
alphabits(testString);
palindrome(testString);
