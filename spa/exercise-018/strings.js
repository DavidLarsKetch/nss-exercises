const btnInput = document.getElementById("btnInput");
const textInput = document.getElementById("textInput");

const clickFunc = (event) => {
  if (!textInput.validity.patternMismatch && event.key === "Enter" || event.type === "click"){
    let str = textInput.value;
    let reverse = reversal(str);
    let bits = alphabits(str);
    palindrome(str);
    btnInput.insertAdjacentHTML("afterend", `<div>${reverse}</div><div>${bits}</div>`);
  } else {
    event.preventDefault;
  }
}

const reversal = str => {
  let newStr = str.split('').reverse().join('');
  return newStr
}

const alphabits = str => {
  let newStr = str.toLowerCase().split('').sort().join('');
  return newStr
}

const palindrome = str => {
  let check = reversal(str) === str ? true : false;
  if(check) {
    btnInput.insertAdjacentHTML("afterend", "<div>Your string is a palindrome</div>");
  }
}

textInput.addEventListener("keyup", clickFunc);
btnInput.addEventListener("click", clickFunc);
