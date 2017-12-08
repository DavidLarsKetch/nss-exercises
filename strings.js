const output = document.getElementById("btnInput");

function reversal(str) {
  let newStr = str.split('').reverse().join('');
  return newStr
}

function alphabits(str) {
  let newStr = str.toLowerCase().split('').sort().join('');
  return newStr
}

function palindrome(str) {
  let check = reversal(str) === str ? true : false;
  if(check) {
    output.insertAdjacentHTML("afterend", "<div>Your string is a palindrome</div>");
  }
}

var testString = "racecar";
let reverse = reversal(testString);
let bits = alphabits(testString);
palindrome(testString);
output.insertAdjacentHTML("afterend", `<div>${reverse}</div><div>${bits}</div>`);
